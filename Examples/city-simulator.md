---
title: "City Simulator"
description: "An overview of the City Simulator example scene provided in the Mapbox Maps SDK for Unity."
topic: Getting started
thumbnail: citySimPlayMode
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The City Simulator example is a great starting point for applications that need a scene with 3D features such as buildings and terrain with elevation. To visualize a map, this example scene comes ready with the `CitySimulatorMap` prefab.

{{
  <AppropriateImage imageId="citySimPlayMode" />
}}

## Visualize a map

Click on `CitySimulatorMap` in the *Hierarchy* to open the *Inspector* to see and edit the settings.

{{
<AppropriateImage imageId="citySimMapSettings" className="block mx-auto" />
}}

By default, City Simulator uses the [Mapbox Streets](https://www.mapbox.com/maps/streets/) style. The style is specified in the **IMAGE** settings under the **Data Source** menu. You can change to another Mapbox default style or use a [custom style](https://www.mapbox.com/help/unity-custom-map-style/).

Elevation data is provided in the **TERRAIN** settings by the [Mapbox Terrain-RGB](https://www.mapbox.com/help/access-elevation-data/#mapbox-terrain-rgb) raster tileset.

The **MAP LAYERS** settings are where the vector tileset is configured. This example uses **Mapbox Streets With Building Ids** for the default. To change the tileset, select another option in the **Data Source** field.

The **FEATURES** settings are where the *Vector Layer Visualizers* are configured. For this example, **ExtrudedBuildings** and **Roads** are set. Select **ExtrudedBuildings** to see the settings for the visualizer.

{{
<AppropriateImage imageId="citySimVisSettings" className="block mx-auto" />
}}

This visualizer makes use of the `building` [layer](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/#layer-reference) of the Mapbox Streets v7 tileset. The Layer Visualizer uses this data to create and style a [layer's](https://www.mapbox.com/help/define-layer/) feature on the map. The styling is determined by the *Extrusion Type* and *Material Options* settings.

The Layer Visualizer uses this data to create and style a layer's features on the map.

## Add a visualizer

The scene can be extended to add any other vector features that you want. To add a vector feature, click the **Add Visualizer** button. Specify a title for the new visualizer, and then make the settings in the properties section. The screenshot below shows an example of a new vector layer visualizer where the [water](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/#water) has been specified, and the *Primitive Type* has been changed to **Polygon**. The *Texturing Style* has been changed to **Custom** and materials have been added to the *Top Material* and *Side Material* fields so that the water features render as blue on the map.

{{
<AppropriateImage imageId="citySimNewVisSettings" className="block mx-auto" />
}}
