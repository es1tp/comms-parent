import { ChatApi } from './chat-api';

export interface FrameSubscriber {
  // Subscriptions
  onFrame(callback: (frame: ChatApi.Frame) => void): ChatApi.Unsubscribe;
  onChatMessages(callback: (frames: ChatApi.ChatFrame[]) => void): ChatApi.Unsubscribe;
  onHistoricalMessages(callback: (frames: ChatApi.ChatLoginFrame[]) => void): ChatApi.Unsubscribe;
  onDXSpots(callback: (frames: ChatApi.DXSpotFrame[]) => void): ChatApi.Unsubscribe;
  onUserEvents(callback: (frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ) => void): ChatApi.Unsubscribe;
  
  // Dispatch incoming frame (handles batching internally)
  dispatch(frame: ChatApi.Frame): void;
  
  // Lifecycle (flushes any pending batches, clears timers)
  dispose(): void;
}

export class FrameSubscriberImpl implements FrameSubscriber {
  // Callback registries
  private frameCallbacks: Array<(frame: ChatApi.Frame) => void> = [];
  private chatCallbacks: Array<(frames: ChatApi.ChatFrame[]) => void> = [];
  private historicalCallbacks: Array<(frames: ChatApi.ChatLoginFrame[]) => void> = [];
  private dxSpotCallbacks: Array<(frames: ChatApi.DXSpotFrame[]) => void> = [];
  private userEventCallbacks: Array<(frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ) => void> = [];
  
  // Batching state
  private chatBatch: ChatApi.ChatFrame[] = [];
  private historicalBatch: ChatApi.ChatLoginFrame[] = [];
  private dxSpotBatch: ChatApi.DXSpotFrame[] = [];
  private batchTimer: any | null = null;
  private readonly batchDelay: number = 50; // 50ms debounce

  // ========== Subscriptions ==========

  onFrame(callback: (frame: ChatApi.Frame) => void): ChatApi.Unsubscribe {
    this.frameCallbacks.push(callback);
    return () => {
      const index = this.frameCallbacks.indexOf(callback);
      if (index > -1) this.frameCallbacks.splice(index, 1);
    };
  }

  onChatMessages(callback: (frames: ChatApi.ChatFrame[]) => void): ChatApi.Unsubscribe {
    this.chatCallbacks.push(callback);
    return () => {
      const index = this.chatCallbacks.indexOf(callback);
      if (index > -1) this.chatCallbacks.splice(index, 1);
    };
  }

  onHistoricalMessages(callback: (frames: ChatApi.ChatLoginFrame[]) => void): ChatApi.Unsubscribe {
    this.historicalCallbacks.push(callback);
    return () => {
      const index = this.historicalCallbacks.indexOf(callback);
      if (index > -1) this.historicalCallbacks.splice(index, 1);
    };
  }

  onDXSpots(callback: (frames: ChatApi.DXSpotFrame[]) => void): ChatApi.Unsubscribe {
    this.dxSpotCallbacks.push(callback);
    return () => {
      const index = this.dxSpotCallbacks.indexOf(callback);
      if (index > -1) this.dxSpotCallbacks.splice(index, 1);
    };
  }

  onUserEvents(callback: (frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ) => void): ChatApi.Unsubscribe {
    this.userEventCallbacks.push(callback);
    return () => {
      const index = this.userEventCallbacks.indexOf(callback);
      if (index > -1) this.userEventCallbacks.splice(index, 1);
    };
  }

  // ========== Frame Dispatch ==========

  dispatch(frame: ChatApi.Frame): void {

    // Always emit to raw frame subscribers
    this.emitToFrameCallbacks(frame);

    // Route to specific handlers
    switch (frame.type) {
      case 'chat':
        this.chatBatch.push(frame.data);
        this.scheduleBatchFlush();
        break;

      case 'chat_login':
        this.historicalBatch.push(frame.data);
        this.scheduleBatchFlush();
        break;

      case 'dx_spot':
      case 'combined_spot':
        this.dxSpotBatch.push(frame.data as ChatApi.DXSpotFrame);
        this.scheduleBatchFlush();
        break;

      case 'user_list':
      case 'user_connected':
      case 'user_disconnected':
      case 'user_state_change':
        this.emitToUserEventCallbacks(frame.data as any);
        break;
    }
  }

  // ========== Lifecycle ==========

  dispose(): void {
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }
    this.flushBatches();
    
    // Clear all callbacks
    this.frameCallbacks = [];
    this.chatCallbacks = [];
    this.historicalCallbacks = [];
    this.dxSpotCallbacks = [];
    this.userEventCallbacks = [];
  }

  // ========== Internal Methods ==========

  private emitToFrameCallbacks(frame: ChatApi.Frame): void {
    this.frameCallbacks.forEach(cb => {
      try {
        cb(frame);
      } catch (error) {
        console.error('Error in frame callback:', error);
      }
    });
  }

  private emitToUserEventCallbacks(frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ): void {
    this.userEventCallbacks.forEach(cb => {
      try {
        cb(frame);
      } catch (error) {
        console.error('Error in user event callback:', error);
      }
    });
  }

  private scheduleBatchFlush(): void {
    if (this.batchTimer) return;
    
    this.batchTimer = setTimeout(() => {
      this.flushBatches();
    }, this.batchDelay);
  }

  private flushBatches(): void {
    if (this.chatBatch.length > 0) {
      const batch = [...this.chatBatch];
      this.chatBatch = [];
      this.chatCallbacks.forEach(cb => {
        try {
          cb(batch);
        } catch (error) {
          console.error('Error in chat callback:', error);
        }
      });
    }

    if (this.historicalBatch.length > 0) {
      const batch = [...this.historicalBatch];
      this.historicalBatch = [];
      this.historicalCallbacks.forEach(cb => {
        try {
          cb(batch);
        } catch (error) {
          console.error('Error in historical callback:', error);
        }
      });
    }

    if (this.dxSpotBatch.length > 0) {
      const batch = [...this.dxSpotBatch];
      this.dxSpotBatch = [];
      this.dxSpotCallbacks.forEach(cb => {
        try {
          cb(batch);
        } catch (error) {
          console.error('Error in DX spot callback:', error);
        }
      });
    }

    this.batchTimer = null;
  }
}