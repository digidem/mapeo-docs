# Loading Configurations

## What is a .mapeosettings file?

A `.mapeosettings` file is a **tar** file, similar to a zip file. You can see the contents of the file by changing the file extension to `.tar` and using any application that can extract tar files.

## Testing 

Before loading your preset configuration file into the phone, use `mapeo-settings lint` to test your files to make sure they will compile on the phone.

Run the following command if you are using the [default template](https://github.com/digidem/mapeo-default-settings).

```text
npm test
...
Presets valid
```

## Mapeo Mobile

Now, you are ready to load your settings to Mapeo Mobile.

### Using manual file transfer

1. Rename the `.mapeosettings` file to .tar 
2. Then expand .tar file by double clicking to open it
3. Copy that folder onto the phone

   ```text
     /sdcard/Android/data/com.mapeo/files/presets/default
     /sdcard/Android/data/com.mapeo.qa/files/presets/default
   ```

   See [https://github.com/digidem/mapeo-mobile\#usage](https://github.com/digidem/mapeo-mobile#usage) for latest published documentation

   ```text
    /sdcard/Android/data/com.mapeo.qa/files/styles/default
    /sdcard/Android/data/com.mapeo/files/styles/default
   ```

### Using Terminal `adb`

1. Plug in the device to your computer using a USB cable.
2. Set the mode for USB debugging on the phone to 'Transfer Files'.
3. In the terminal, typing `adb devices` should give you the following output:

```text
$ adb devices
List of devices attached
ZY223D4VVS  device
```

[If your device is not found or is unauthorized, make sure it is plugged in all the way and then see this troubleshooting guide](https://stackoverflow.com/questions/23081263/adb-android-device-unauthorized).

Now, you'll need to place the presets folder in the appropriate directory on the Android device using `adb push`

```text
adb push ./mapeo-settings-myproject-v1.0.0/* /sdcard/Android/data/com.mapeo/files/presets/default
```

Did it work? Test that the files are available on the device by using the shell. 

```text
$ adb shell ls /sdcard/Android/data/com.mapeo/files/presets/default
```

If it worked correctly, you should see the following output

```text
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

### Automated import

Mapeo Desktop supports importing `.mapeosettings` files in the user interface.

After you've created your settings file, you can import it by navigating to **File-&gt;Import Configuration...**.

![](../.gitbook/assets/configuration-desktop.png)

### Manual import

You can also extract the `.mapeosettings` file as a tar file into the following directory:

```text
USERDATA/Mapeo/presets/default
```

* USERDATA is the per-user application data directory, which by default points to:
  * `%APPDATA%` on Windows
  * `$XDG_CONFIG_HOME` or ~/.config on Linux
  * `~/Library/Application Support` on macOS

This folder \(`default`\) expects these files directly in under this default folder \(i.e. no sub-folder with a different name\):

```text
presets.json
icons.svg
etc...
```



