import { ChatApi } from "./chat-api";

export function parseLine(line: string): ChatApi.Frame {
  const parts = line.split('|');
  const frameType = parts[0];

  try {
    switch (frameType) {
      case 'LOGSTAT':
        return { type: 'login_response', data: parseLogstat(parts) };
      case 'SES':
        return { type: 'session', data: { frameType: 'session', chatId: parts[1], sessionKey: parts[2] } };
      case 'CR':
        return { type: 'chat_login', data: parseChatLogin(parts) };
      case 'CH':
        return { type: 'chat', data: parseChat(parts) };
      case 'CE':
        return { type: 'chat_end', data: { frameType: 'chat_end', chatId: parts[1] } };
      case 'DL':
        return { type: 'dx_spot', data: parseDXSpot(parts) };
      case 'DE':
        return { type: 'dx_spot_end', data: { frameType: 'dx_spot_end' } };
      case 'MA':
        return { type: 'map_spot', data: parseMapSpot(parts) };
      case 'ME':
        return { type: 'map_spot_end', data: { frameType: 'map_spot_end' } };
      case 'DM':
        return { type: 'combined_spot', data: parseCombinedSpot(parts) };
      case 'DF':
        return { type: 'combined_spot_end', data: { frameType: 'combined_spot_end' } };
      case 'UA0':
        return { type: 'user_list', data: parseUserList(parts) };
      case 'UE':
        return { type: 'user_stats', data: { frameType: 'user_stats', chatId: parts[1], registeredUsers: parseInt(parts[2]) } };
      case 'US4':
        return { type: 'user_state_change', data: { frameType: 'user_state_change', chatId: parts[1], callsign: parts[2], state: parseInt(parts[3]) } };
      case 'UM3':
        return { type: 'user_already_logged', data: parseUserAlreadyLogged(parts) };
      case 'UR6':
        return { type: 'user_disconnected', data: { frameType: 'user_disconnected', chatId: parts[1], callsign: parts[2] } };
      case 'UA5':
        return { type: 'user_connected', data: parseUserConnected(parts) };
      case 'LOC':
        return { type: 'locator_update', data: { frameType: 'locator_update', timestamp: parseInt(parts[1]), callsign: parts[2], locator: parts[3] } };
      case 'CK':
        return { type: 'keepalive', data: { frameType: 'keepalive' } };
      case 'AN':
        return { type: 'announcement', data: { frameType: 'announcement', date: parts[1], callsign: parts[2], info: parts[3] } };
      default:
        return { type: 'unknown', raw: line };
    }
  } catch (error) {
    console.error('Parse error:', error, 'Line:', line);
    return { type: 'unknown', raw: line };
  }
}

function parseLogstat(parts: string[]): ChatApi.LoginResponse {
  const code = parseInt(parts[1]);
  if (code !== 100) {
    return { 
      frameType: 'login_response',
      code, 
      errorMessage: parts.slice(2).join('|') 
    };
  }
  return {
    frameType: 'login_response',
    code,
    chatId: parts[2],
    clientVersion: parts[3],
    sessionKey: parts[4],
    firstName: parts[parts.length - 4],
    lastName: parts[parts.length - 3],
    locator: parts[parts.length - 2],
    email: parts[parts.length - 1],
  };
}

function parseChatLogin(parts: string[]): ChatApi.ChatLoginFrame {
  return {
    frameType: 'chat_login',
    chatId: parts[1] as any,
    date: parseDate(parts[2]),
    callsign: parts[3],
    firstName: decodeHtmlEntities(parts[4]),
    destination: parts[5],
    message: decodeHtmlEntities(parts[6]),
    highlight: parts[7],
  };
}

function parseChat(parts: string[]): ChatApi.ChatFrame {
  return {
    frameType: 'chat',
    chatId: parts[1] as any,
    date: parseDate(parts[2]),
    callsign: parts[3],
    firstName: decodeHtmlEntities(parts[4]),
    destination: parts[5],
    message: decodeHtmlEntities(parts[6]),
    highlight: parts[7],
  };
}

function parseDXSpot(parts: string[]): ChatApi.DXSpotFrame {
  return {
    frameType: 'dx_spot',
    timestamp: parseInt(parts[1]),
    dxUtc: parts[2],
    spotter: parts[3],
    frequency: parts[4],
    dxCallsign: parts[5],
    info: decodeHtmlEntities(parts[6]),
    spotterLocator: parts[7],
    dxLocator: parts[8],
  };
}

function parseMapSpot(parts: string[]): ChatApi.MapSpotFrame {
  return {
    frameType: 'map_spot',
    mapWindow: parts[1],
    timestamp: parseInt(parts[2]),
    spotter: parts[3],
    dxCallsign: parts[4],
    spotterLocator: parts[5],
    dxLocator: parts[6],
  };
}

function parseCombinedSpot(parts: string[]): ChatApi.CombinedSpotFrame {
  return {
    frameType: 'combined_spot',
    mapWindow: parts[1],
    timestamp: parseInt(parts[2]),
    dxUtc: parts[3],
    spotter: parts[4],
    frequency: parts[5],
    info: decodeHtmlEntities(parts[6]),
    spotterLocator: parts[7],
    dxLocator: parts[8],
  };
}

function parseUserList(parts: string[]): ChatApi.UserListFrame {
  return {
    frameType: 'user_list',
    chatId: parts[1],
    callsign: parts[2],
    firstName: decodeHtmlEntities(parts[3]),
    locator: parts[4],
    state: parseInt(parts[5]),
  };
}

function parseUserAlreadyLogged(parts: string[]): ChatApi.UserAlreadyLoggedFrame {
  return {
    frameType: 'user_already_logged',
    chatId: parts[1],
    callsign: parts[2],
    firstName: decodeHtmlEntities(parts[3]),
    locator: parts[4],
    state: parseInt(parts[5]),
  };
}

function parseUserConnected(parts: string[]): ChatApi.UserConnectedFrame {
  return {
    frameType: 'user_connected',
    chatId: parts[1],
    callsign: parts[2],
    firstName: decodeHtmlEntities(parts[3]),
    locator: parts[4],
    state: parseInt(parts[5]),
  };
}

function parseDateInternal(input: string): Date {
  // Check last character
  if (input.endsWith('Z')) {
    // It's an ISO/Zulu string
    return new Date(input);
  }
  
  // Otherwise it's a Unix timestamp string
  const num = Number(input);
  
  // Assume seconds if < 10000000000, else milliseconds
  return num < 10000000000 
    ? new Date(num * 1000) 
    : new Date(num);
}

function parseDate(input: string): Date {
  const result = parseDateInternal(input);
  return result;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));
}