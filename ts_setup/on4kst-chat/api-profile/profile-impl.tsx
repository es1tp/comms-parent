import React from "react";
import { Profile, ProfileContextType, DeepPartial } from "./profile-types";
import * as EncryptedStorage from 'expo-secure-store';


const STORE_ID =  'profile';
const EMPTY_PROFILE: Profile = {
  callsign: "",
  password: "",
  chatId: "2",
  locator: "",
  rotator: {
    calibrationOffset: 0,
    config: {
      ip: '192.168.0.1',
      port: 8080
    }
  }
}

function parseProfile(value: string | null): DeepPartial<Profile> | undefined {
  if(value) {
    try {
      return JSON.parse(value);
    } catch(error) {
      console.error("failed to parse profile", error);
    } 
  }
  return undefined;
}

function parseProfileConfig(profile: DeepPartial<Profile>): Profile['rotator']['config'] {
  return {
    ip: profile.rotator?.config?.ip ?? EMPTY_PROFILE.rotator.config.ip,
    port: profile.rotator?.config?.port ?? EMPTY_PROFILE.rotator.config.port
  };
}



function getProfile(): Profile {
  const item = EncryptedStorage.getItem(STORE_ID);
  const profile = parseProfile(item);  

  if(profile) {
    const config = parseProfileConfig(profile);
    return {
      callsign: profile.callsign ?? "",
      password: profile.password ?? "",
      chatId: profile.chatId ?? EMPTY_PROFILE.chatId,
      locator: profile.locator ?? "",
      rotator: {
        calibrationOffset: profile.rotator?.calibrationOffset ?? EMPTY_PROFILE.rotator.calibrationOffset,
        config
      }
    }
  }

  return EMPTY_PROFILE;
}

function saveProfile(profile: Profile): Profile {
  const item = JSON.stringify(profile);
  EncryptedStorage.setItem(STORE_ID, item);
  return JSON.parse(item);
}

function clearProfile(): Profile {
  const item = JSON.stringify(EMPTY_PROFILE);
  EncryptedStorage.setItem(STORE_ID, item);
  return JSON.parse(item);
}

const ProfileContext = React.createContext<ProfileContextType | undefined>(undefined);



export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = React.useState<Profile>(() => getProfile());

  const save = React.useCallback((newProfile: DeepPartial<Profile>) => {
    setProfile(profile => {


      const saved = saveProfile({
        ...profile, 
        ...newProfile,
        rotator: {
          calibrationOffset: newProfile.rotator?.calibrationOffset?? profile.rotator.calibrationOffset,
          config: {
            ip: newProfile.rotator?.config?.ip ?? profile.rotator.config.ip,
            port: newProfile.rotator?.config?.port ?? profile.rotator.config.port
          }
        }
      });

      return saved;
    });
  }, []);

  const clear = React.useCallback(() => {
    const cleared = clearProfile();
    setProfile(cleared);
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, save, clear }}>
      {children}
    </ProfileContext.Provider>)
}


export const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileContext');
  }
  return context;
}