---
title: "Tabletop AR"
description: "An overview of the Tabletop AR Example."
topic: AR
thumbnail: tabletopArRunDevice
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The Tabletop AR example makes it possible to overlay 3D maps and location data onto the AR camera feed using Unity’s AR Interface and location services. This article outlines the setup and purpose of each major part of the the Tabletop AR example.

{{
  <AppropriateImage imageId="tabletopArRunDevice" />
}}

## Getting started

To open the example, navigate to `MapboxAR > Examples > Scenes > TabletopAR` and double-click to open. You’ll see an AR prerequisites warning.

{{
<AppropriateImage imageId="tabletopArWarning" className="block mx-auto" />
}}

Some layers that aren’t included by default in a Unity project and are needed to run this scene. Select **ARTabletopKit** in the *Hierarchy* view.  Add the following layers by clicking **Layer** and selecting **Add Layer**

{{
<AppropriateImage imageId="tabletopArAddLayers" className="block mx-auto" />
}}

Specify the following layers:
- ARGameObject
- Map
- Path
- Both

{{
<AppropriateImage imageId="wsArLayerList" className="block mx-auto" />
}}

The **ARTabletopKit** contains:

1. **AR Root**: The UnityInterface Prefab for building cross-platform AR apps.
2. **MapHolder**: Places the map on the plane and contains MapRoot as a child object. MapRoot contains the Abstract Map script and is where you can change the map settings as shown below.
3. **FocusSquare**: Finds the plane on which to place the map.

{{
<AppropriateImage imageId="tabletopArMaprootSettings" className="block mx-auto" />
}}

## Editing the scene

Click on **MapRoot** and find the *Latitude Longitude* settings in the **GENERAL** settings of the Abstract Map script. Click **Search** and enter the coordinates of anywhere in the world. For this example, we used New York City.

{{
<AppropriateImage imageId="tabletopArLocSettings" className="block mx-auto" />
}}

## Running in the editor

Once your project layers are set up, play the scene. You should see the map in the Scene and Game views:

{{
<AppropriateImage imageId="tabletopArRunEditor" className="block mx-auto" />
}}

## Running on a device

First, check that your device supports ARKit or ARCore. Build settings differ for iOS and Android. Check your **Player Settings** before you build:

1. iOS: ARKit supports the *METAL* graphics API only. Select *Metal* or *Auto Graphics API*.
2. iOS: Be sure to include a *Camera Usage Description* and *Location Usage Description*
3. Android: Use *OPENGL ES*  or *Auto Graphics API*.

{{
<AppropriateImage imageId="tabletopArBuildSettings" className="block mx-auto" />
}}

After you build to your device, find a flat surface such as a table top and align your camera. Your map will be visualized once the AR plane is detected. Below is a screenshot of New York City.

{{
<AppropriateImage imageId="tabletopArNewYork" className="block mx-auto" />
}}
