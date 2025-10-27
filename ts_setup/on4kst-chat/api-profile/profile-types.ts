
export type DeepPartial<T> = T extends object
  ? T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends Function
    ? T
    : T extends Date
    ? T
    : {
        [P in keyof T]?: DeepPartial<T[P]>;
      }
  : T;

export interface ProfileContextType {
  profile: Profile;
  save(profile: DeepPartial<Profile>): void;
  clear(): void;
}

export interface Profile {
  callsign: string;
  password: string;
  chatId: string;
  locator: string;
  rotator: {
    calibrationOffset: number;
    config: {     
      ip: string;
      port: number
    }
  }
}