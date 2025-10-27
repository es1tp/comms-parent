```
# path commands
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

# compile/install etc...
pnpm android:copy-network-config
pnpm expo run:android --device
pnpm expo run:android --variant release
pnpm android:release
pnpm android:uninstall
pnpm android:install
pnpm android:reinstall



# debug commands
adb -s R5CN204HFXX install android/app/build/outputs/apk/release/app-release.apk
adb -s R5CN204HFXX uninstall io.github.es1tp
adb kill-server
adb start-server
adb devices

rm -rf android
pnpm expo prebuild --clean
pnpm expo run:android
```