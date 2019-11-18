---
id: configuration
title: Customizing Icons & Forms
sidebar_label: Customizing Icons & Forms
---

This is a guide on how to customize Mapeo Mobile and Desktop for versions
**4.0.0-beta and above**, and the instructions may be different than earlier
versions.

## Creating a Mapeo Settings file

If you want to have a custom configuration for the tags and icons, see the
[guide to creating a Mapeo Settings
file](https://github.com/digidem/mapeo-settings-builder/blob/master/README.md#table-of-contents).

A `.mapeosettings` file is a **tar** file, similar to a zip file. You can see
the contents of the file by changing the file extention to `.tar` and using any
application that can extract tar files.

*If you would like to help improve this process, contributions are actively welcomed!*

## Testing presets

Before loading your preset configuration file into the phone, use
`mapeo-settings lint` to test your files to make sure they will compile on the
phone.


Run the following command if you are using the [default template](https://github.com/digidem/mapeo-default-settings).

```
npm test
...
Presets valid
```

## Mapeo Mobile

Now, you are ready to load your settings to Mapeo Mobile.

1. Plug in the device to your computer using a USB cable.
2. Set the mode for usb debugging on the phone to 'Transfer Files'.
3. In the terminal, typing `adb devices` should give you the following output:

```
$ adb devices
List of devices attached
ZY223D4VVS	device
```

4. Build presets with mapeo-settings-builder:

```
$ npm run build
```

5. Go to the build directory where your presets live...

```
$ cd build
```

[If your device is not found or is unauthorized, make sure it is plugged in all
the way and then see this troubleshooting
guide](https://stackoverflow.com/questions/23081263/adb-android-device-unauthorized).

6. Now, you'll need to place the presets folder in the appropriate directory on the Android device using `adb push`:

```
adb push ./my-presets-v1.0.0/* /sdcard/Android/data/com.mapeo/files/presets/default
```

7. Check that the files are available on the device by using the shell:

```
$ adb shell ls /sdcard/Android/data/com.mapeo/files/presets/default
VERSION
icons
icons.json
icons.png
icons.svg
metadata.json
presets.json
style.css
translations.json
```

## Mapeo Desktop

#### Automated import 

Mapeo Desktop supports importing `.mapeosettings` files in the user interface.

After you've created your settings file, you can import it by navigating to
**File->Import Configuration...**.

![Import Configuration Mapeo Desktop](../../img/configuration-desktop.png)


#### Manual import 

You can also extract the `.mapeosettings` file as a tar file into the following directory:

```
USERDATA/Mapeo/presets/default
```

* USERDATA is the per-user application data directory, which by default points to:

  * `%APPDATA%` on Windows
  * `$XDG_CONFIG_HOME` or ~/.config on Linux
  * `~/Library/Application Support` on macOS

This folder (`default`) expects these files directly in under this default
folder (i.e. no sub-folder with a different name):

```
presets.json
icons.svg
etc...
```

### Help wanted

* document more clearly or link to documentation on how to move folders into an android device
