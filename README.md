# memorize_app

使用React Native开发的"别忘记"APP。

## 安装

1. git clone <https://github.com/tecshuttle/memorize_app.git>
2. cd memorize_app
3. npm install
4. emulator -avd Nexus_5X_API_26
5. react-native run-android
6. DONE

## 打包发布

```bash
$ cd android
$ gradlew assembleRelease
# 如果报 Unable to process incoming event 'ProgressComplete' 错误，则执行以下命令：
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

END
