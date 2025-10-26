```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

adb kill-server
adb start-server
adb devices
pnpm expo run:android --device


corepack pnpm android:copy-network-config
cd android
./gradlew assembleRelease

adb -s R5CN204HFXX install android/app/build/outputs/apk/release/app-release.apk
adb -s R5CN204HFXX uninstall io.github.es1tp


rm -rf android
pnpm expo prebuild --clean
pnpm expo run:android
```