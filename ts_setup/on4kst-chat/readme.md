```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

adb kill-server
adb start-server
adb devices
pnpm expo run:android --device


cd android
./gradlew assembleRelease

rm -rf android
pnpm expo prebuild --clean
pnpm expo run:android
```