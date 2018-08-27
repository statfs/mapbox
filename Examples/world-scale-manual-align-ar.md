---
title: "World-scale AR manual alignment"
description: "An overview of the World-scale AR Manual alignment example."
topic: AR
thumbnail: manualAlignDebug
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The world-scale AR manual alignment example allows for overlaying 3D maps and location data onto the AR camera feed using Unity’s AR interface and location services. This article outlines the setup and purpose of each major part of this example. Depending on your device and GPS signal, features in the AR scene may not be aligned properly with the features in the real world. This example scene is a good starting point for aligning your AR scene when the GPS signal is not accurate enough.

{{
  <AppropriateImage imageId="manualAlignDebug" />
}}

##  Concepts

- **AR Session**:
  In AR apps, the scene’s main camera is positioned automatically to match the real-world device’s position, but only from the moment the app is initialized.
- **Map Alignment**:
  To make an AR session location aware, the WorldAlignmentKitManual prefab aligns a 3D map around the AR camera.
- **Customization**:
  Once the Map is aligned, you have access to all of Mapbox’s data and customization to build world-scale experiences.

## Getting started

To open the example, navigate to `MapboxAR > Examples > Scenes > WorldScaleAR-ManualAlignment` and double-click to open. You’ll see a split screen in the Game view. The bottom half of the screen is for aligning the position with the real world.

{{
<AppropriateImage imageId="manualAlignGameView" className="block mx-auto" />
}}

Some layers that aren’t included by default in a Unity project are needed to run this scene. Select **WorldAlignmentKitManual** in the *Hierarchy* view.  To add new layers, click **Layer** and select **Add Layer**.

{{
<AppropriateImage imageId="manualAlignLayers" className="block mx-auto" />
}}

Next, add:
- ARGameObject
- Map
- Path
- Both

{{
<AppropriateImage imageId="wsArLayerList" className="block mx-auto" />
}}

The **WorldAlignmentKitManual** contains:

1. **ARRoot**: The UnityInterface Prefab for building cross-platform AR apps.
2. **MapCamera**: A top-down view of the map, used to view GPS traces, AR position, and the current map alignment.
3. **ArAlignedMap**: The map, aligned to AR Root using your devices location services. Renders blue debug color buildings by default.
4. **DebugCanvas**: This contains a detailed debug log of location services and AR activity. To view it, press the **LOG** icon in play mode and on devices. This is included as a Unity UI element to make debugging easier on-location. It also contains a pointer button to relocalize the map.
5. **LocationProvider**: Provides GPS data to the map, and spoofs data for testing in the editor.

## Running in the editor

Once your project layers are set up, play the scene. In the Editor, the map is positioned based on `EditorLocationProvider` settings, a component attached to  `WorldAlignmentKitManual > LocationProvider > Editor` in the hierarchy. In the Scene view, you'll see the map and the blue debug buildings. In the Game view, you'll see both the blue debug buildings, and a top down view of the map which shows the position indicated by a red pointer.


{{
<AppropriateImage imageId="manualAlignEditor" className="block mx-auto" />
}}

## Editing the Scene

Make the scene more interesting by styling the buildings. With the following settings, you can transform the buildings from the debug blue color to one of the styles included with the Maps SDK for Unity.

1. On the AbstractMap script, select the **buildings** *Vector Layer Visualizer* in the **FEATURES** section.
2. Set the *Texturing Style* to **Custom**.
3. Set the *Texturing Type* to **Atlas With Color Palette**.
3. Select **MapboxStylesRoofsPerRenderer** for the *Top Material*.
4. Select **MapboxStylesFacadesPerRenderer** for the *Side Material*.
5. Select **DefaultAtlasInfo** for *Atlas Info*.
6. Select **Warm** for the *Color Palette*.

Before building to your device, see the screenshot below to confirm the settings and run the scene in the Editor. For detailed information on how styling works read the [styling documentation](../styling).

{{
<AppropriateImage imageId="manualAlignMats" className="block mx-auto" />
}}

## Running on a device

First, check that your device supports ARKit or ARCore. Build settings differ for iOS and Android. Check your **Player Settings** before you build:

- iOS: ARKit supports the *METAL* graphics API only. Select *Metal* or *Auto Graphics API*.
- iOS: Be sure to include a *Camera Usage Description* and *Location Usage Description*
- Android: Use *OPENGL ES*  or *Auto Graphics API*.

{{
<AppropriateImage imageId="tabletopArBuildSettings" className="block mx-auto" />
}}

Once the AR plane is detected, the map will be visualized with the styles that you set in the previous step. Then, you can manually align your map to your actual location. Use the lower portion of the screen to specify your exact position. Use the upper portion of screen to align the AR buildings with real buildings. To reset your location, press the pointer button on the right. Press the **LOG** icon on the left for debugging info.

{{
<AppropriateImage imageId="manualAlignStyled" className="block mx-auto" />
}}
