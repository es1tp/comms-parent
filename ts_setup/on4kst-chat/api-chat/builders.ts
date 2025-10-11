import { ChatApi } from "./chat-api";

export function buildLoginCommand(config: ChatApi.ClientConfig): string {
  const parts = [
    'LOGIN',
    config.callsign,
    config.password,
    config.chatId,
    config.clientVersion,
    (config.pastMessages || 1).toString(),
    (config.pastDxSpots || 1).toString(),
    (config.includeUsers === false ? '0' : '1'),
    (config.lastMessageTimestamp || 0).toString(),
    (config.lastDxTimestamp || 0).toString(),
  ];
  return parts.join('|');
}

export function serializeCommand(command: ChatApi.Command): string {
  switch (command.type) {
    case '/AWAY':
    case '/BACK':
    case '/LSTCLX':
    case '/SHCLX':
    case '/QUIT':
      return command.type;
    case '/CHAT':
      return `${command.type} ${command.value}`;
    case '/CQ':
      return `${command.type} ${command.callsign} ${command.message}`;
    case '/DX':
      return `${command.type} ${command.qrg} ${command.callsign}${command.info ? ' ' + command.info : ''}`;
    case '/SETCLX':
      return `${command.type} ${command.dxcluster}`;
    case '/SETNAME':
      return `${command.type} ${command.name}`;
    case '/SETLOC':
      return `${command.type} ${command.locator}`;
    case '/SHLOC':
      return `${command.type} ${command.callsign}`;
    case '/SHUSER':
      return `${command.type} ${command.callsign}`;
  }
}