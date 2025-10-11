import EncryptedStorage from 'react-native-encrypted-storage';



export interface SecureStorage {
  saveCredentials(callsign: string, password: string): Promise<void>;
  saveToken(token: string): Promise<void>;
  getCallsign(): Promise<string | null>;
  getPassword(): Promise<string | null>;
  getToken(): Promise<string | null>;
  clearAll(): Promise<void>;
}


class SecureStorageImpl implements SecureStorage {
  private readonly KEYS = {
    CALLSIGN: 'user_callsign',
    PASSWORD: 'user_password',
    TOKEN: 'user_token',
  };

  async saveCredentials(callsign: string, password: string): Promise<void> {
    await EncryptedStorage.setItem(this.KEYS.CALLSIGN, callsign);
    await EncryptedStorage.setItem(this.KEYS.PASSWORD, password);
  }

  async saveToken(token: string): Promise<void> {
    await EncryptedStorage.setItem(this.KEYS.TOKEN, token);
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

  async clearAll(): Promise<void> {
    await EncryptedStorage.removeItem(this.KEYS.CALLSIGN);
    await EncryptedStorage.removeItem(this.KEYS.PASSWORD);
    await EncryptedStorage.removeItem(this.KEYS.TOKEN);
  }
}

export const secureStorage: SecureStorage = new SecureStorageImpl();