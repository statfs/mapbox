---
title: "Location Based Game"
description: "An overview of the Location Based Game sample scene provided in the Mapbox Maps SDK for Unity."
topic: Getting started
thumbnail: unityExampleSceneLocationBasedGame
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The Location Based Game example shows how to position and orient a `Player` GameObject on a map using a GPS device or using the editor directly.  In the scene, a pin is set on a 2D map that includes building outline data and other procedurally generated geo features from Mapbox’s data that you can toggle and style as needed. This example uses a custom map style from Mapbox Studio, but it can be swapped with any other [map style](https://www.mapbox.com/help/define-style/).

{{
  <AppropriateImage imageId="unityExampleSceneLocationBasedGame" />
}}

## Add a Player

The `Player` GameObject is a 3D model representing the player’s location on the map. `Player` moves and rotates along with `LocationProvider`, a GameObject that captures real or simulated location.

Any GameObject can represent the player in this scene. To use a different 3D model:

- Remove the original `Player` object, add the new model into the scene, and position it at `0,0,0`.
- Add the `Immediate Position With Location Provider` and `Rotate With Location Provider` components to this GameObject.
- Attach the Map object to the Map field in `Immediate Position With Location Provider`.
- The custom `Player` will show up on the map and move accordingly.

{{
<AppropriateImage imageId="unitySdkDocLocationbasedgame" className="block mx-auto" />
}}

## Understand the LocationProvider script

The `LocationProvider` GameObject holds a collection of scripts to determine a player’s location, either in the real world (with GPS, on a device) or simulated in Unity (with manually added coordinates). Without these scripts, the location would be hard-coded in the `AbstractMap` script.

There are several different Location Provider scripts:

- `DeviceLocationProvider`: Uses GPS data on a device. The `Player` GameObject follows the location on the map reported by the GPS device update.
- `EditorLocationProvider`: Similar to `DeviceLocationProvider`, but for testing inside Unity.
- `LocationArrayEditorLocationProvider`: Allows the `Player` GameObject to be moved across a set of points entered as latitude, longitude coordinates in an array.
- `TransformLocationProvider`: Makes the `Player` GameObject follow the position and rotation of another GameObject.
- `DeviceLocationProviderAndroidNative`: Uses GPS data optimized for Android devices.

## Benefits and limitations

The Location Based Game example makes it possible to create a zoomable, pannable map that a `Player` can move around. It is best used for looking at real world map data from a top-down view, like a paper map. It is less appropriate for building 3D scenes with a more flexible camera view. This is similar to the [Zoomable Map example](../zoomable-map), which acts similarly to Location Based Game but does not have a `Player` GameObject.
