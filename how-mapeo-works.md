# How Mapeo Works

### **Peer-to-peer Database**

Unlike traditional apps where all the data is stored on a single server \(in the cloud or in an office\), the database is integrated into the app on the device, and every device has a copy of all the data. We made this choice so that Mapeo can work entirely offline and does not need the user to set up any database or machine for storing the data. If any device is lost, synchronizing a new device with any other device in the project will restore the data. This peer-to-peer database also means that users can transfer data to a computer in the field without internet, and several users with computers can all work on the same dataset and share edits.

### **Synchronization**

The way to synchronize data between two Mapeo devices is currently to connect them to a local wifi network. They will discover each other automatically \(if they are part of the same project\) and the user can initiate a sync between them. The wifi network does not need to be connected to the internet - we currently use cheap \($25\) travel routers to create a wifi network in the field. In the future we plan to do this over bluetooth. Currently every user ends up with a copy of all data from all users, but on mobile they can only edit or delete their own observations- others' observations are read-only. In the future we plan to give more control over this \(one option is to continue to synchronize all data everywhere, but to encrypt each users data for specific admin users, so other users cannot read it even though they have a copy\).

### **Data Model**

The main data type in Mapeo is an "Observation". An observation has lat and lon coordinates; GPS metadata; one or more attachments \(currently only photos, but audio and video in the future\); and any number of key-value tags with attributes about the observation. [The full schema is here](https://github.com/digidem/mapeo-schema/blob/master/docs/observation.md).

When the user creates an observation with Mapeo they are asked to fill in a description and, optionally, additional questions. The description is always written as a "note" tag. Which additional questions are shown and how the answers translate to key-value tags is defined by "presets". Presets define how to show questions to the user and the tag key that the answer should be stored under. The schema of presets and fields is [here](https://github.com/digidem/mapeo-schema/blob/master/docs/preset.md) (presets) and [here](https://github.com/digidem/mapeo-schema/blob/master/docs/field.md) (fields)**.** This is very close to the presets model used by the OpenStreetMap editor, iD**.**

The presets define "Categories", which can have an icon. When a user creates an Observation they select a category by pressing an icon, and the category they choose defines which additional questions are shown. We chose this approach because it gives us a very flexible data model - Observations can have any structure of attributes, and how they are presented to the user can change over time and is defined by the presets and fields. In Mapeo we also have a "Place" data type which can be a point, line or area. In the future we will support multiple "Observations" to be linked to a single "Place", but for now there is a one-to-one relationship between an observation and a place.

### **Internal database details**

Internally, all the data is stored as an immutable ledger for each device that is cryptographically signed to prove it has not been tampered with. The main "database" is a plain text file for each device of JSON documents for each creation, edit and deletion of observations, and an accompanying file of cyrptographic signatures. When devices sync they share the latest ledgers \(every device has a ledger, and it is only appended to, it never changes\). After sync we create an index of all the data from all the devices, and if there are any conflicts then we choose to display the most recent edit, but the other versions are not deleted.

### **Programming languages**

The user interface and front-end logic of Mapeo Mobile is written in React Native. This means that all the code is in JavaScript, but the UI is displayed using native code by the React Native framework. This means that it runs well on slower devices.

We chose React Native because it means we can share code between desktop and mobile and it is cross-platform. Currently we only support Android, but we have a working iOS prototype with minimal changes to the code.

The database is also written in JavaScript. We run the database in a separate process in the app in Node.js compiled for Android. The database and the front-end speak to each other via a local http \(web\) ****server and RPC channels.

### **Offline maps**

We use [mapbox-gl](https://github.com/mapbox/mapbox-gl-native) for displaying maps. It supports both raster \(e.g. satellite\) and vector tiles. Vector tiles are helpful because they take up less space online. We use [Mapbox Studio](https://www.mapbox.com/mapbox-studio/) for designing maps.

We chose this approach because it gives us a lot of flexibility about styling maps, we can download map tiles and show maps offline, and the vector maps provide a really good user experience for zooming and moving the maps, even on slower devices.

