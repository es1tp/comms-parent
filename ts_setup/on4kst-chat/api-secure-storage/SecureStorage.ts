import * as EncryptedStorage from 'expo-secure-store';
import React from 'react';


export interface SecureStorage {
  saveCredentials(callsign: string, password: string, locator: string | null, calibrationOffset: number | null): Promise<void>;
  saveToken(token: string): Promise<void>;
  getCallsign(): Promise<string | null>;
  getPassword(): Promise<string | null>;
  getToken(): Promise<string | null>;

  getMyLocaltion(): Promise<{ locator: string | null, calibrationOffset: number | null }>;
  
  clearAll(): Promise<void>;
}

export interface SecureStorageToken {
  callsign: string | null;
  password: string | null;
  me: {
    locator: string | null;
    calibrationOffset: number | null;
  };
  raw: string | null;
}


class SecureStorageImpl implements SecureStorage {

  private readonly KEYS = {
    CALLSIGN: 'user_callsign',
    PASSWORD: 'user_password',
    TOKEN: 'user_token',
    LOCATOR: 'user_locator',
    ROTATOR_OFFSET: 'user_offset',
  };

  async saveCredentials(callsign: string, password: string, locator: string | null, calibrationOffset: number | null): Promise<void> {
    await EncryptedStorage.setItemAsync(this.KEYS.CALLSIGN, callsign);
    await EncryptedStorage.setItemAsync(this.KEYS.PASSWORD, password);

    if(locator) {
      await EncryptedStorage.setItemAsync(this.KEYS.LOCATOR, locator);
    }
    if(calibrationOffset) {
      await EncryptedStorage.setItemAsync(this.KEYS.ROTATOR_OFFSET, calibrationOffset + '');
    }
  }

  async saveToken(token: string): Promise<void> {
    await EncryptedStorage.setItemAsync(this.KEYS.TOKEN, token);
  }

  async getCallsign(): Promise<string | null> {
    return await EncryptedStorage.getItem(this.KEYS.CALLSIGN);
  }

  async getPassword(): Promise<string | null> {
    return await EncryptedStorage.getItem(this.KEYS.PASSWORD);
  }

  async getToken(): Promise<string | null> {
    return await EncryptedStorage.getItem(this.KEYS.TOKEN);
  }

  async getRotatorOffset(): Promise<string | null> {
    return await EncryptedStorage.getItem(this.KEYS.ROTATOR_OFFSET);
  }

  async getLocator(): Promise<string | null> {
    return await EncryptedStorage.getItem(this.KEYS.LOCATOR);
  }

  async getMyLocaltion(): Promise<{ locator: string | null; calibrationOffset: number | null; }> {
    const offset = EncryptedStorage.getItem(this.KEYS.ROTATOR_OFFSET);
    return {
      locator: EncryptedStorage.getItem(this.KEYS.LOCATOR),
      calibrationOffset: offset ? Number.parseInt(offset) : null
    };
  }

  async clearAll(): Promise<void> {
    await EncryptedStorage.deleteItemAsync(this.KEYS.CALLSIGN);
    await EncryptedStorage.deleteItemAsync(this.KEYS.PASSWORD);
    await EncryptedStorage.deleteItemAsync(this.KEYS.TOKEN);
    await EncryptedStorage.deleteItemAsync(this.KEYS.LOCATOR);
    await EncryptedStorage.deleteItemAsync(this.KEYS.ROTATOR_OFFSET);
  }
}

export const secureStorage: SecureStorage = new SecureStorageImpl();


export const useSecureStorage = () => {
  const getToken: () => Promise<SecureStorageToken> = React.useCallback(() => Promise.all(
    [ secureStorage.getCallsign(), 
      secureStorage.getPassword(), 
      secureStorage.getMyLocaltion(),
      secureStorage.getToken()])
      .then(([callsign, password, me, raw]) => ({ callsign, password, me, raw}))
  , [secureStorage]);

  return { secureStorage, getToken };
}

export const useSecureStorageToken = () => {
  const { getToken } = useSecureStorage();
  const [token, setToken] = React.useState<SecureStorageToken>();

  React.useEffect(() => {
    getToken().then(setToken);
  }, []);
  return { token };
}