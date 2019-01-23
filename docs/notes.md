# Notes


### Major Struggles:
1. **Environmental Setup**
Since we chose to work with an unfamiliar environment, we spent about 3 hours trying to get the environment setup.  Our main issue for a while was getting Cordova to run on android (which, of course, was absolutely necessary for us). Here's a snippet of some of the errors we encountered along the way: 
```shell
➜  what-the-hail git:(frontend-dev) ✗ cordova run android
zsh: command not found: cordova
➜  what-the-hail git:(frontend-dev) ✗ npm install -gcordova
/usr/local/bin/cordova -> /usr/local/lib/node_modules/cordova/bin/cordova
+ cordova@8.1.2
added 594 packages from 523 contributors in 8.143s
➜  what-the-hail git:(frontend-dev) ✗ cordova run android
? May Cordova anonymously report usage statistics toimprove the tool over time? No

You have been opted out of telemetry. To change this, run: cordova telemetry on.
Current working directory is not a Cordova-based project.
➜  what-the-hail git:(frontend-dev) ✗ cordova platform add android
Current working directory is not a Cordova-based project.
➜  what-the-hail git:(frontend-dev) ✗ cd client
➜  client git:(frontend-dev) ✗ cordova platform add android
Using cordova-fetch for cordova-android@~7.1.1
Adding android project...
Creating Cordova project for the Android platform:
        Path: platforms/android
        Package: com.f1lt3r.whatthehail
        Name: HelloCordova
        Activity: MainActivity
        Android target: android-27
Android project created with cordova-android@7.1.4
Android Studio project detected
Android Studio project detected
Installing "cordova-plugin-whitelist" for android

               This plugin is only applicable for versions of cordova-android greater than 4.0. If you have a previous platform version, you do *not* need this plugin since the whitelist will be built in.

--save flag or autosave detected
Saving android@~7.1.4 into config.xml file ...
➜  client git:(frontend-dev) ✗ cordova run android
Android Studio project detected
Failed to find 'ANDROID_HOME' environment variable. Try setting it manually.
Failed to find 'android' command in your 'PATH'. Try update your 'PATH' to include path to valid SDK directory.
➜  client git:(frontend-dev) ✗ cordova run ios
Unable to load PlatformApi from platform. Error: Cannot find module 'unorm'
Unhandled error. (The platform "ios" does not appear to be a valid cordova platform. It is missing API.js. ios not supported.)
➜  client git:(frontend-dev) ✗ npm run ios
npm ERR! missing script: ios

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/gracehartzell/.npm/_logs/2019-01-22T21_03_55_030Z-debug.log
➜  client git:(frontend-dev) ✗ cordova platform rm ios
Removing platform ios from config.xml file...
Removing ios from cordova.platforms array in package.json
➜  client git:(frontend-dev) ✗ cordova platform add ios
Using cordova-fetch for cordova-ios@~4.5.4
Adding ios project...
Creating Cordova project for the iOS platform:
        Path: platforms/ios
        Package: com.f1lt3r.whatthehail
        Name: HelloCordova
iOS project created with cordova-ios@4.5.5
Installing "cordova-plugin-whitelist" for ios
--save flag or autosave detected
Saving ios@~4.5.5 into config.xml file ...
➜  client git:(frontend-dev) ✗ cordova run ios
Building for iPhone X Simulator
Building project: /Users/gracehartzell/what-the-hail/client/platforms/ios/HelloCordova.xcworkspace
        Configuration: Debug
        Platform: emulator
Build settings from command line:
    CONFIGURATION_BUILD_DIR = /Users/gracehartzell/what-the-hail/client/platforms/ios/build/emulator
    SDKROOT = iphonesimulator12.1
    SHARED_PRECOMPS_DIR = /Users/gracehartzell/what-the-hail/client/platforms/ios/build/sharedpch

Build settings from configuration file '/Users/gracehartzell/what-the-hail/client/platforms/ios/cordova/build-debug.xcconfig':
    CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES = YES
    CODE_SIGN_ENTITLEMENTS = $(PROJECT_DIR)/$(PROJECT_NAME)/Entitlements-$(CONFIGURATION).plist
    CODE_SIGN_IDENTITY = iPhone Developer
    ENABLE_BITCODE = NO
    GCC_PREPROCESSOR_DEFINITIONS = DEBUG=1
    HEADER_SEARCH_PATHS = "$(TARGET_BUILD_DIR)/usr/local/lib/include""$(OBJROOT)/UninstalledProducts/include" "$(OBJROOT)/UninstalledProducts/$(PLATFORM_NAME)/include" "$(BUILT_PRODUCTS_DIR)"
    OTHER_LDFLAGS = -ObjC
    SWIFT_OBJC_BRIDGING_HEADER = $(PROJECT_DIR)/$(PROJECT_NAME)/Bridging-Header.h

No target specified for emulator. Deploying to iPhone-X, 12.1 simulator
/Users/gracehartzell/what-the-hail/client/platforms/ios/build/emulator/HelloCordova.app/Info.plist file not found.
➜  client git:(frontend-dev) ✗ open platforms/ios/HelloCordova.xcodeproj
➜  client git:(frontend-dev) ✗
```
**So... How did we fix this??** Download [Android Studio](https://developer.android.com/studio/)... 

```shell
cordova run android
Android Studio project detected
ANDROID_HOME=/Users/gracehartzell/Library/Android/sdk
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_201.jdk/Contents/Home
studio
Subproject Path: CordovaLib
Subproject Path: app
publishNonDefault is deprecated and has no effect anymore. All variants are now published.
Checking the license for package Android SDK Platform 27 in /Users/gracehartzell/Library/Android/sdk/licenses
Warning: License for package Android SDK Platform 27 not accepted.

FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring project ':CordovaLib'.
> You have not accepted the license agreements of the following SDK components:
  [Android SDK Platform 27].
  Before building your project, you need to accept the license agreements and complete the installation of the missing components using the Android Studio SDK Manager.
  Alternatively, to learn how to transfer the license agreements from one workstation to another, go to http://d.android.com/r/studio-ui/export-licenses.html

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
/Users/gracehartzell/galvanize/q4/what-the-hail/client/platforms/android/gradlew: Command failed with exit code 1 Error output:
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring project ':CordovaLib'.
> You have not accepted the license agreements of the following SDK components:
  [Android SDK Platform 27].
  Before building your project, you need to accept the license agreements and complete the installation of the missing components using the Android Studio SDK Manager.
  Alternatively, to learn how to transfer the license agreements from one workstation to another, go to http://d.android.com/r/studio-ui/export-licenses.html

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
```


2. We had some struggles deciding 