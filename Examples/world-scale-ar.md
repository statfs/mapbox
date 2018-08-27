---
title: "World-scale AR"
description: "An overview of the World-scale AR Example."
topic: AR
thumbnail: wsArRunEditor
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The world-scale AR example allows for overlaying 3D maps and location data onto the AR camera feed using Unity’s AR Interface and location services. This article outlines the setup and purpose of each major part of the the World-scale AR example.

{{
  <AppropriateImage imageId="wsArRunEditor" />
}}

##  Concepts

- AR Session:
  In AR apps, the scene’s main camera is positioned automatically to match the real-world device’s position, but only from the moment the app is initialized.
- Map Alignment:
  To make an AR session location aware, the WorldAlignmentKit prefab aligns a 3D map around the AR camera.
- Customization:
  Once the Map is aligned, you have access to all of Mapbox’s data and customization to build world-scale experiences.

## Getting started

To open the example, navigate to `MapboxAR > Examples > Scenes > WorldScaleAR` and double-click to open. You’ll see an AR prerequisites warning.

{{
<AppropriateImage imageId="wsArWarning" className="block mx-auto" />
}}

Some layers that aren’t included by default in a Unity project are needed to run this scene. Select **WorldAlignmentKit** in the *Hierarchy* view.  To get things going, add the following layers by clicking **Layer** and selecting **Add Layer**

{{
<AppropriateImage imageId="wsArAddLayer" className="block mx-auto" />
}}

Next, add:
- ARGameObject
- Map
- Path
- Both

{{
<AppropriateImage imageId="wsArLayerList" className="block mx-auto" />
}}

The **WorldAlignmentKit** contains:

1. **ARRoot**: The UnityInterface Prefab for building cross-platform AR apps.
2. **MapCamera**: A top-down view of the map, used to view gps traces, AR position, and the current map alignment. View in play mode with the Map Checkbox.
3. **ArAlignedMap**: The map, aligned to AR Root using your devices location services. Renders orange debug buildings by default.
4. **DebugCanvas**: A detailed debug log of location services and AR activity viewable by pressing the ‘LOG’ icon in play mode and on devices. This is included as a unity UI element to make debugging easier on-location.
5. **LocationProvider**: Provides GPS data to the map, and spoofs data for testing in the editor.

## Running in the editor

Once your project layers are set up, play the scene. you should see the GPS position:

{{
<AppropriateImage imageId="wsArRunEditor" className="block mx-auto" />
}}

In the Editor, the map is positioned based on `EditorLocationProvider` settings, a component attached to  `WorldAlignmentKit > LocationProvider > Editor` in the hierarchy.


{{
<AppropriateImage imageId="wsArEditorLocProvider" className="block mx-auto" />
}}

The WorldAlignmentKit shows GPS movement in blue, and AR movement in red. The blue dot represents the current GPS trace. In the editor, test this out by using the "w,a,s,d" keys to move the AR camera in the editor. After some distance, you should see an AR trace in red, and the last GPS fix in blue. In the editor, the GPS fix won’t update automatically. On a device, you’ll see blue traces as well as red.

{{
<AppropriateImage imageId="wsArBlueDot" className="block mx-auto" />
}}
