export namespace ChatApi {

  // ========== Configuration Types ==========

  /**
   * Chat IDs for different bands
   * - 1: 50/70 MHz
   * - 2: 144/432 MHz
   * - 3: Microwave
   * - 4: EME/JT65
   * - 5: Low Band
   * - 7: 50 MHz IARI Region 2
   */
  export type ChatId = '1' | '2' | '3' | '4' | '5' | '7';

  /**
   * User state bitmap
   * - bit 0: the user is away (displayed "(callsign)")
   * - bit 1: logged within the last 5 minutes
   * - bit 2: sysop
   * - bit 3: not used (user with privileges)
   */
  export type UserState = number;

  /**
   * Aurora alert levels
   * - 2: High lat. AU warning
   * - 3: High lat. AU alert
   * - 5: Mid lat. AU warning
   * - 6: Mid lat. AU alert
   * - 8: Low lat. AU warning
   * - 9: Low lat. AU alert
   * - Other values: no alert
   */
  export type AuroraLevel = 2 | 3 | 5 | 6 | 8 | 9 | number;

  // ========== Login Frames ==========

  /**
   * LOGSTAT response frame
   * Server -> Client after LOGIN/LOGINC/LOGINP
   * 
   * Success: LOGSTAT|100|...
   * Error: LOGSTAT|101-118|error message|
   */
  export interface LoginResponse {
    /** 100 = success, 101-118 = error codes */
    code: number;
    chatId?: string;
    clientVersion?: string;
    /** Session key for this connection */
    sessionKey?: string;
    config?: string;
    dxOption?: string;
    firstName?: string;
    lastName?: string;
    /** Maidenhead grid locator */
    locator?: string;
    email?: string;
    /** Error message for codes 101-118 */
    errorMessage?: string;
  }

  /**
   * Login error codes from LOGSTAT frame
   * - 101: Unknown user
   * - 102: Bad callsign (length)
   * - 103: Bad callsign (used characters)
   * - 104: Bad password (length)
   * - 105: Bad password (used characters)
   * - 106: Wrong selection
   * - 107: The passwords don't match
   * - 108: Invalid callsign
   * - 109: Invalid password
   * - 110: Invalid first name
   * - 111: Invalid locator
   * - 112: Invalid email address
   * - 113: User already registered
   * - 114: Wrong password
   * - 115: Wrong selection
   * - 116: Invalid last name
   * - 117: PROXY not logged in that chat
   * - 118: PROXY %s not logged in that chat
   */
  export type LoginErrorCode = 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118;

  /**
   * SES frame - Session key
   * Server -> Client
   * SES|chat id|session key|
   */
  export interface SessionFrame {
    chatId: string;
    sessionKey: string;
  }

  // ========== Chat Message Frames ==========

  /**
   * CR frame - Chat message at login (initial burst)
   * Server -> Client
   * CR|chat id|Unix time|callsign|firstname|destination|msg|highlight|
   * 
   * Destination: 0=public, callsign=private message
   * Highlight: to ignore
   */
  export interface ChatLoginFrame {
    chatId: string;
    /** Unix timestamp in seconds */
    timestamp: number;
    callsign: string;
    firstName: string;
    /** '0' for public, or callsign for private message */
    destination: string;
    message: string;
    /** To ignore */
    highlight: string;
  }

  /**
   * CH frame - Chat message after login (ongoing)
   * Server -> Client
   * CH|chat id|date|callsign|firstname|destination|msg|highlight|
   * 
   * Date format: YYYYMMDDhhmmss
   */
  export interface ChatFrame {
    chatId: string;
    /** YYYYMMDDhhmmss format */
    date: string;
    callsign: string;
    firstName: string;
    /** '0' for public, or callsign for private message */
    destination: string;
    message: string;
    /** To ignore */
    highlight: string;
  }

  /**
   * CE frame - End of CR frames marker
   * Server -> Client
   * CE|chat id|
   */
  export interface ChatEndFrame {
    chatId: string;
  }

  // ========== DX Spot Frames ==========

  /**
   * DL frame - DX spot for the DX window
   * Server -> Client
   * DL|Unix time|dx utc|spotter|qrg|dx|info|spotter locator|dx locator|
   * 
   * QRG: Frequency in kHz
   */
  export interface DXSpotFrame {
    /** Unix timestamp in seconds */
    timestamp: number;
    /** UTC time in hhmm format (e.g., "0758") */
    dxUtc: string;
    /** Spotter callsign */
    spotter: string;
    /** Frequency in kHz */
    frequency: string;
    /** DX station callsign */
    dxCallsign: string;
    /** Spot comment/info */
    info: string;
    /** Spotter's Maidenhead locator */
    spotterLocator: string;
    /** DX station's Maidenhead locator */
    dxLocator: string;
  }

  /**
   * DE frame - End of DL frames marker
   * Server -> Client
   * DE|
   */
  export interface DXSpotEndFrame { }

  /**
   * MA frame - MAP spot for the map window
   * Server -> Client
   * MA|map window|Unix time|spotter|dx|spotter locator|dx locator|
   * 
   * Map window: map qrg range index (0-3)
   */
  export interface MapSpotFrame {
    /** Map QRG range index (0-3) */
    mapWindow: string;
    /** Unix timestamp in seconds */
    timestamp: number;
    /** Spotter callsign */
    spotter: string;
    /** DX station callsign */
    dxCallsign: string;
    /** Spotter's Maidenhead locator */
    spotterLocator: string;
    /** DX station's Maidenhead locator */
    dxLocator: string;
  }

  /**
   * ME frame - End of MA frames marker
   * Server -> Client
   * ME|
   */
  export interface MapSpotEndFrame { }

  /**
   * DM frame - Combined DX + MAP spot
   * Server -> Client
   * DM|map window|Unix time|dx utc|spotter|qrg|info|spotter locator|dx locator|
   */
  export interface CombinedSpotFrame {
    /** Map QRG range index (0-3) */
    mapWindow: string;
    /** Unix timestamp in seconds */
    timestamp: number;
    /** UTC time in hhmm format */
    dxUtc: string;
    /** Spotter callsign */
    spotter: string;
    /** Frequency in kHz */
    frequency: string;
    /** Spot comment/info */
    info: string;
    /** Spotter's Maidenhead locator */
    spotterLocator: string;
    /** DX station's Maidenhead locator */
    dxLocator: string;
  }

  /**
   * DF frame - End of DM frames marker
   * Server -> Client
   * DF|
   */
  export interface CombinedSpotEndFrame { }

  // ========== User Frames ==========

  /**
   * UA0 frame - User list at login
   * Server -> Client
   * UA0|chat id|callsign|firstname|locator|state|
   */
  export interface UserListFrame {
    chatId: string;
    callsign: string;
    firstName: string;
    /** Maidenhead grid locator */
    locator: string;
    /** User state bitmap */
    state: UserState;
  }

  /**
   * UE frame - User statistics / end of user list
   * Server -> Client
   * UE|chat id|nb registered users|
   */
  export interface UserStatsFrame {
    chatId: string;
    /** Total number of registered users */
    registeredUsers: number;
  }

  /**
   * US4 frame - User state update
   * Server -> Client
   * US4|chat id|callsign|state|
   */
  export interface UserStateChangeFrame {
    chatId: string;
    callsign: string;
    /** User state bitmap */
    state: UserState;
  }

  /**
   * UM3 frame - User already logged (duplicate login)
   * Server -> Client
   * UM3|chat id|callsign|firstname|locator|state|
   */
  export interface UserAlreadyLoggedFrame {
    chatId: string;
    callsign: string;
    firstName: string;
    /** Maidenhead grid locator */
    locator: string;
    /** User state bitmap */
    state: UserState;
  }

  /**
   * UR6 frame - User disconnected
   * Server -> Client
   * UR6|chat id|callsign|
   */
  export interface UserDisconnectedFrame {
    chatId: string;
    callsign: string;
  }

  /**
   * UA5 frame - User connected
   * Server -> Client
   * UA5|chat id|callsign|firstname|locator|state|
   */
  export interface UserConnectedFrame {
    chatId: string;
    callsign: string;
    firstName: string;
    /** Maidenhead grid locator */
    locator: string;
    /** User state bitmap */
    state: UserState;
  }

  // ========== Locator Update ==========

  /**
   * LOC frame - Locator update
   * Server -> Client
   * LOC|Unix time|callsign|locator|
   */
  export interface LocatorUpdateFrame {
    /** Unix timestamp in seconds */
    timestamp: number;
    callsign: string;
    /** Maidenhead grid locator */
    locator: string;
  }

  // ========== Propagation Frames ==========

  /**
   * WC frame - WWC (World Wide Conditions)
   * Server -> Client
   * WC|14345|Unix time|time|info|
   */
  export interface WWCFrame {
    constant: string; // "14345"
    /** Unix timestamp in seconds */
    timestamp: number;
    time: string;
    info: string;
  }

  /**
   * AN frame - Cluster announcement
   * Server -> Client
   * AN|date|callsign|info|
   * 
   * Date format: YYYYMMDDhhmmss
   */
  export interface AnnouncementFrame {
    /** Date in YYYYMMDDhhmmss format */
    date: string;
    callsign: string;
    info: string;
  }

  /**
   * PRKP frame - K and Kp indices
   * Server -> Client
   * PRKP|time|kpp|
   */
  export interface KpIndexFrame {
    time: string;
    kpp: string;
  }

  /**
   * PRMA frame - Magnetic field data
   * Server -> Client
   * PRMA|time|Bt|Bz|sws|
   * 
   * Bt: Total magnetic field
   * Bz: North/south component
   * sws: Solar wind speed
   */
  export interface MagneticFieldFrame {
    time: string;
    /** Total magnetic field */
    bt: string;
    /** North/south component */
    bz: string;
    /** Solar wind speed */
    sws: string;
  }

  /**
   * PRSW frame - Proton flux
   * Server -> Client
   * PRSW|time|proton|
   */
  export interface ProtonFluxFrame {
    time: string;
    proton: string;
  }

  /**
   * PRWW frame - Solar conditions
   * Server -> Client
   * PRWW|time|solar flux|A index|K index|Sun Spot Number|
   */
  export interface SolarConditionsFrame {
    time: string;
    solarFlux: string;
    aIndex: string;
    kIndex: string;
    sunSpotNumber: string;
  }

  /**
   * PRXR frame - X-ray flux
   * Server -> Client
   * PRXR|time|xray|
   */
  export interface XRayFluxFrame {
    time: string;
    xray: string;
  }

  /**
   * PRAU frame - Aurora alert level
   * Server -> Client
   * PRAU|time|Aurora level|
   */
  export interface AuroraFrame {
    time: string;
    /** Aurora alert level */
    auroraLevel: AuroraLevel;
  }

  // ========== System Frames ==========

  /**
   * CK frame - Keepalive check
   * Server -> Client
   * CK|
   * 
   * Client must respond with CRLF (\r\n) or connection will be terminated
   */
  export interface KeepaliveFrame { }

  /**
   * CKUSER frame - Check if user is connected (proxy only)
   * Server -> Client
   * CKUSER|chat id|callsign|
   */
  export interface CheckUserFrame {
    chatId: string;
    callsign: string;
  }

  /**
   * DXQ frame - Response to RDXQ command
   * Server -> Client
   * DXQ|chat id|qrg min1|qrg max1|...|qrg min8|qrg max8|
   */
  export interface DXRangesFrame {
    chatId: string;
    ranges: Array<{ min: string; max: string }>;
  }

  /**
   * MAQ frame - Response to RMAQ command
   * Server -> Client
   * MAQ|chat id|qrg min1|qrg max1|...|qrg min4|qrg max4|
   */
  export interface MapRangesFrame {
    chatId: string;
    ranges: Array<{ min: string; max: string }>;
  }

  // ========== Union Type for All Frames ==========

  export type Frame =
    | { type: 'login_response'; data: LoginResponse }
    | { type: 'session'; data: SessionFrame }
    | { type: 'chat_login'; data: ChatLoginFrame }
    | { type: 'chat'; data: ChatFrame }
    | { type: 'chat_end'; data: ChatEndFrame }
    | { type: 'dx_spot'; data: DXSpotFrame }
    | { type: 'dx_spot_end'; data: DXSpotEndFrame }
    | { type: 'map_spot'; data: MapSpotFrame }
    | { type: 'map_spot_end'; data: MapSpotEndFrame }
    | { type: 'combined_spot'; data: CombinedSpotFrame }
    | { type: 'combined_spot_end'; data: CombinedSpotEndFrame }
    | { type: 'user_list'; data: UserListFrame }
    | { type: 'user_stats'; data: UserStatsFrame }
    | { type: 'user_state_change'; data: UserStateChangeFrame }
    | { type: 'user_already_logged'; data: UserAlreadyLoggedFrame }
    | { type: 'user_disconnected'; data: UserDisconnectedFrame }
    | { type: 'user_connected'; data: UserConnectedFrame }
    | { type: 'locator_update'; data: LocatorUpdateFrame }
    | { type: 'wwc'; data: WWCFrame }
    | { type: 'announcement'; data: AnnouncementFrame }
    | { type: 'kp_index'; data: KpIndexFrame }
    | { type: 'magnetic_field'; data: MagneticFieldFrame }
    | { type: 'proton_flux'; data: ProtonFluxFrame }
    | { type: 'solar_conditions'; data: SolarConditionsFrame }
    | { type: 'xray_flux'; data: XRayFluxFrame }
    | { type: 'aurora'; data: AuroraFrame }
    | { type: 'keepalive'; data: KeepaliveFrame }
    | { type: 'check_user'; data: CheckUserFrame }
    | { type: 'dx_ranges'; data: DXRangesFrame }
    | { type: 'map_ranges'; data: MapRangesFrame }
    | { type: 'unknown'; raw: string };


  // ============= Connection Configuration =============

  export interface ClientConfig {
    host: string;
    port: number;
    callsign: string;
    password: string;
    /** Chat ID: '1'=50MHz, '2'=144MHz, '3'=Microwave, '4'=EME, '5'=LowBand, '7'=50MHz IARI */
    chatId: ChatId;
    /** Client software identifier */
    clientVersion: string;

    /** Number of past messages to retrieve at login (optional) */
    pastMessages?: number;
    /** Number of past DX spots to retrieve at login (optional) */
    pastDxSpots?: number;
    /** Whether to receive user list/updates (optional, default true) */
    includeUsers?: boolean;
    /** Last message timestamp for filtering (optional) */
    lastMessageTimestamp?: number;
    /** Last DX timestamp for filtering (optional) */
    lastDxTimestamp?: number;

    /** DX frequency ranges in kHz (up to 8 ranges) */
    dxFrequencyRanges?: Array<{ min: number; max: number }>;
    /** MAP frequency ranges in kHz (up to 4 ranges) */
    mapFrequencyRanges?: Array<{ min: number; max: number }>;

    /** Reconnect automatically on disconnect (default true) */
    reconnectOnDisconnect?: boolean;
    /** Keepalive timeout in ms (default 30000) */
    keepaliveTimeout?: number;
    /** Initial connection timeout in ms (default 10000) */
    connectionTimeout?: number;
  }

  // ============= Connection State =============

  export type ConnectionState =
    | { status: 'disconnected' }
    | { status: 'connecting' }
    | { status: 'authenticating' }
    | { status: 'connected'; sessionKey: string }
    | { status: 'reconnecting'; attempt: number }
    | { status: 'error'; error: string | Error };

  // ============= Command Types =============

  /**
   * Available chat values for /CHAT command
   */
  export type ChatValue = '50' | '144' | 'GHZ' | 'EME' | 'HF';

  /**
   * Typed commands for sendCommand()
   * All commands are sent as: MSG|chat id|0|command_string|0|
   */
  export type Command =
    /** Mark as away */
    | { type: '/AWAY' }
    /** Mark as present/back */
    | { type: '/BACK' }
    /** Switch to another chat */
    | { type: '/CHAT'; value: ChatValue }
    /** Send a public message highlighted to specific callsign */
    | { type: '/CQ'; callsign: string; message: string }
    /** Spot a DX station on the cluster */
    | { type: '/DX'; qrg: string; callsign: string; info?: string }
    /** List available DX clusters */
    | { type: '/LSTCLX' }
    /** Set the DX cluster for spotting */
    | { type: '/SETCLX'; dxcluster: string }
    /** Set your first name */
    | { type: '/SETNAME'; name: string }
    /** Set your grid locator */
    | { type: '/SETLOC'; locator: string }
    /** Show current DX cluster setting */
    | { type: '/SHCLX' }
    /** Show a station's locator */
    | { type: '/SHLOC'; callsign: string }
    /** Show a station's user data */
    | { type: '/SHUSER'; callsign: string }
    /** Disconnect from chat */
    | { type: '/QUIT' };

  // ============= Result Types =============

  export type Result<T, E> = [T, null] | [null, E];

  export interface LoginError {
    code: 'INVALID_CREDENTIALS' | 'NETWORK_ERROR' | 'SERVER_ERROR' | 'TIMEOUT';
    message: string;
    serverCode?: LoginErrorCode;
  }

  export interface DisconnectError {
    code: 'NOT_CONNECTED' | 'NETWORK_ERROR';
    message: string;
  }

  export interface SendError {
    code: 'NOT_CONNECTED' | 'INVALID_FORMAT' | 'NETWORK_ERROR';
    message: string;
  }

  // ============= Client Interface =============

  export type Unsubscribe = () => void;

  export interface Client {
    /**
     * Establish connection and authenticate
     * Returns session key on success
     */
    connect(config: ClientConfig): Promise<Result<LoginResponse, LoginError>>;

    /**
     * Gracefully disconnect
     */
    disconnect(): Promise<Result<void, DisconnectError>>;

    /**
     * Check if currently connected
     */
    isConnected(): boolean;

    /**
     * Get current connection state
     */
    getConnectionState(): ConnectionState;

    // ========== Frame Subscriptions ==========

    /**
     * Subscribe to all raw protocol frames
     * Useful for debugging or handling frames not yet processed
     */
    onFrame(callback: (frame: Frame) => void): Unsubscribe;

    /**
     * Subscribe to historical chat messages
     */
    onHistoricalMessages(callback: (frames: ChatApi.ChatLoginFrame[]) => void): ChatApi.Unsubscribe

    /**
     * Subscribe to chat messages (CH frames)
     */
    onChatMessages(callback: (frames: ChatFrame[]) => void): Unsubscribe;

    /**
     * Subscribe to DX spots (DL and DM frames)
     */
    onDXSpots(callback: (frames: DXSpotFrame[]) => void): Unsubscribe;

    /**
     * Subscribe to user events (UA5, UR6, US4 frames)
     */
    onUserEvents(callback: (frame:
      | UserConnectedFrame
      | UserDisconnectedFrame
      | UserStateChangeFrame
    ) => void): Unsubscribe;

    /**
     * Subscribe to connection state changes
     */
    onConnectionStateChange(callback: (state: ConnectionState) => void): Unsubscribe;


    
    // ========== Commands (Client -> Server) ==========

    /**
     * Send a chat message
     * MSG|chat id|destination|message|0|
     * 
     * @param chatId - Target chat
     * @param destination - '0' for public, or callsign for private
     * @param message - Message text
     */
    sendMessage(
      chatId: ChatId,
      destination: string,
      message: string
    ): Promise<Result<void, SendError>>;

    /**
     * Send a typed command
     * MSG|chat id|0|command|0|
     */
    sendCommand(
      chatId: string,
      command: Command
    ): Promise<Result<void, SendError>>;

    // ========== Advanced Configuration ==========

    /**
     * Add another chat to the connection
     * ACHAT|chat id|past msgs|past dx|user flags|last msg ts|last dx ts|
     */
    addChat(
      chatId: string,
      options?: {
        pastMessages?: number;
        pastDxSpots?: number;
        includeUsers?: boolean;
        lastMessageTimestamp?: number;
        lastDxTimestamp?: number;
      }
    ): Promise<Result<void, SendError>>;

    /**
     * Remove a chat from the connection
     * DCHAT|chat id|
     */
    removeChat(chatId: string): Promise<Result<void, SendError>>;

    /**
     * Set DX frequency ranges (session only, up to 8 ranges)
     * SDXQ|chat id|qrg min1|qrg max1|...|qrg min8|qrg max8|
     * 
     * @param ranges - Frequency ranges in kHz (empty array = no DX spots)
     */
    setDXFrequencyRanges(
      chatId: string,
      ranges: Array<{ min: number; max: number }>
    ): Promise<Result<void, SendError>>;

    /**
     * Set MAP frequency ranges (session only, up to 4 ranges)
     * SMAQ|chat id|qrg min1|qrg max1|...|qrg min4|qrg max4|
     * 
     * @param ranges - Frequency ranges in kHz (empty array = no MAP spots)
     */
    setMapFrequencyRanges(
      chatId: string,
      ranges: Array<{ min: number; max: number }>
    ): Promise<Result<void, SendError>>;

    /**
     * Read current DX frequency ranges
     * RDXQ|chat id|
     * Returns: DXQ|chat id|qrg min1|qrg max1|...|
     */
    readDXFrequencyRanges(chatId: string): Promise<Result<DXRangesFrame, SendError>>;

    /**
     * Read current MAP frequency ranges
     * RMAQ|chat id|
     * Returns: MAQ|chat id|qrg min1|qrg max1|...|
     */
    readMapFrequencyRanges(chatId: string): Promise<Result<MapRangesFrame, SendError>>;

    /**
     * Set/reset propagation frame reception
     * SPR|value|
     */
    setPropagationReception(enabled: boolean): Promise<Result<void, SendError>>;

    /**
     * Get current configuration
     */
    getConfig(): ClientConfig | null;
  }
}