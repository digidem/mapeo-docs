# Adding a Project Key

## What is a Project Key?

In the `metadata.json` file in your Mapeo Configuration, you can include a `projectKey` which is a random cryptographic string of characters to prevent unwanted devices from getting access to the data.

If Mapeo Mobile or Mapeo Desktop has this inside the presets it has loaded, then it can only sync with another Mapeo Mobile or Mapeo Desktop that has the same project key.

You can edit the project key. For example, if want to make first 4 characters identifiable to a project, but can only contain letters a-f and numbers 0-9.

It can also only be 64 characters long -- no more, no less. 

## Creating a Project Key

To create a projectKey, first open the Terminal.

### Using mapeo-settings-builder

Copy and paste the following command into the terminal

```text
mapeo-settings-builder generate-key
```

You'll see something like this \(but with x replaced with real characters and numbers\)

```text
'380c02d32xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1d'
```

Copy this string and add it to the `metadata.json` file so it looks like this:

```text
{
  "dataset_id": "mapeo-jungle",
  "projectKey": "380c02d32xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1d"
}
```

Notice that there are double quotes `"` around each value.

