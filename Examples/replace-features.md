---
title: "Replace features"
description: "An overview of the Data Explorer example scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: replaceFeaturePlayMode
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

This example demonstrates how you can use the `ReplaceFeatureModifier` to swap out a default extruded building with a custom 3D object. With this modifier, you can replace your corporate office locations with a branded building model, or spawn a highly detailed 3D object in place of a famous monument or building.

{{
<AppropriateImage imageId="replaceFeaturePlayMode" className="block mx-auto" />
}}

## Game object modifiers

Game object modifiers are [`ScriptableObjects`](https://docs.unity3d.com/Manual/class-ScriptableObject.html) that work with meshes and game objects to further allow you to decorate, enhance, or make modifications to your game objects. To create a new modifier, right click in your project window and navigate to **Create** > **Mapbox** > **Modifiers**


{{
<AppropriateImage imageId="createModifier" className="block mx-auto" />
}}

You can also create modifiers by clicking **Add New** in the **Advanced** > **Modifier Options** section of the `AbstractMap` script.


## ReplacefeatureModifier overview

To open the modifier for this example, navigate to **MAP LAYERS** > **FEATURES**, and then select the **ExtrudedBuildings** *Vector Layer Visualizer*. Next, with **ExtrudedBuildings** selected, open then **Advanced** section and then **Modifier Options**.

{{
<AppropriateImage imageId="modifierPath" className="block mx-auto" />
}}

Under *Game Object Modifiers*, double click on **ReplaceFeatureModifier**. This will open the modifier in your Inspector window and you will see the following settings:

*Active*: This boolean setting toggles the modifier on and off.

*Prefab*: This is the 3D object to spawn in place of the feature is specified.

*Scale down with world*: This setting scales the specified prefab to the size of the tile.

*Prefab Locations*: This is an array that holds all locations to all the buildings and features to be replaced with the supplied prefab. You can increase the value of *Size* to add new elements to the array. Click **Search** to find a feature, or paste in the latitude and longitude coordinates.

*Explicitly Blocked Feature Ids*: This is a list of ids on the **ExtrudedBuildings** layer to prevent from spawning. This can be left empty unless you encounter an issue where the latitude and longitude coordinates are not properly filtering out the correct building to replaced.

Note that in the **Advanced** section of **ExtrudedBuildings** that **Buildings with Unique Ids** is checked. Also, in the same layer *Group Features* is unchecked. These settings are required for feature replacement to work as expected.


{{
<AppropriateImage imageId="replaceFeaturesModifierDetails" className="block mx-auto" />
}}

## Replace a building with a 3D model

Follow the steps below or in this [video tutorial](https://vimeo.com/275107764) to replace the Empire State Building with a custom 3D model.

{{
  <iframe src="https://player.vimeo.com/video/275107764" width="640" height="360" frameborder="0" className="h360 block mx-auto my36" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
}}


To replace a building with a 3D model, you can configure a new `ReplaceFeatureModifier`. In your Project window, open up the CitySimulator scene found in the `Mapbox > Examples > 0_PrefabScenes` folder. Alternatively, you can create a new scene and add the `CitySimulatorMap` prefab to the scene.

1. Select the **CitySimulatorMap** game object in your Hierarchy window.
2. On the `AbstractMap` navigate to **MAP LAYERS** > **FEATURES**, and then select the **ExtrudedBuildings** *Vector Layer Visualizer*.
3. Select **ExtrudedBuildings**, open **Advanced**, and then **Modifier Options**.
4. Under *Game Object Modifiers*, click **Add New** and select **ReplaceFeatureModifier**

{{
<AppropriateImage imageId="replaceFeaturesAddNew" className="block mx-auto" />
}}

4. This will create a new modifier. Double click **NewReplaceFeatureModifier** to open the modifier in your Inspector window.
5. Assign the `Building Pivot` prefab. You can use your own model here if you would like.
6. Click **Prefab Locations** and change the *Size* to `1`.
7. Click **Search** to search for `Empire State Building` or paste in `40.748333333333, -73.985277777778` to *Element 0*.

{{
<AppropriateImage imageId="empireModifierSettings" className="block mx-auto" />
}}

8. To make sure that the location of the Empire State Building is in view of the camera, select **CitySimulatorMap** in your Hierarchy. Then, inside the **GENERAL** settings of the `AbstractMap` script, set the *Latitude Longitude* to `40.748333333333, -73.985277777778` which is the location of the building.

{{
<AppropriateImage imageId="empireMapLocation" className="block mx-auto" />
}}

9. Enter Play mode to see the prefab spawned in place of the Empire State Building!

{{
<AppropriateImage imageId="empireReplaced" className="block mx-auto" />
}}
