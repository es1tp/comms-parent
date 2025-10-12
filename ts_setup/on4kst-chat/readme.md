```
adb kill-server
adb start-server
adb devices
pnpm expo run:android --device

rm -rf android
pnpm expo prebuild --clean
pnpm expo run:android
```