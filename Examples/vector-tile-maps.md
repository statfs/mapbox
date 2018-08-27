---
title: "Vector Tile Maps"
description: "An overview of the Vector Tile Maps sample scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: unityExampleSceneVectorTileMap
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

This guide is for v1.3 of the Maps SDK for Unity. For v1.4 and later, see the [Data Explorer documentation](/unity-sdk/overview/data-explorer/).

Vector tile maps allow you to use vector tiles to generate 3D features and utilize metadata in your app or game.

{{
  <AppropriateImage imageId="unityExampleSceneVectorTileMap" />
}}

## Vector tiles overview

Vector tile maps are made up of [vector tiles](https://www.mapbox.com/help/define-vector-tiles/) — a lightweight data format for storing geospatial data as points, lines, and polygons. You can use metadata from vector tiles to render points of interest, roads, buildings, parks, and water bodies in the form of 3D mesh geometry.

### Mapbox vector tilesets

Mapbox offers several tilesets including **Mapbox Streets** for streets, buildings, areas, water, and land data based on OpenStreetMap and **Mapbox Terrain** that provides a worldwide elevation data set complete with contours, hillshade, and landcover data. Read more about Mapbox vector tilesets in [Our map data](https://www.mapbox.com/help/how-mapbox-data-works/).

### Custom vector tilesets

You can create vector tiles from your own geospatial data by uploading data to your Mapbox account in one of the accepted file formats. Read more about uploading custom data in our [Upload data](https://www.mapbox.com/help/how-uploads-work/) guide.


## Vector tiles in Unity

Your MapVisualizer will create the requested tiles and relay them to the necessary factories to processes terrain, image, and vector data for rendering. The LayerVisualizer will then receive the data to create and style feature of a [layer](https://www.mapbox.com/help/define-layer/) on the map.


## Example scenes

There are four example scenes in the Maps SDK for Unity for vector tile maps.

### Basic Vector Map

The Basic Vector Map example is comprised of a `BasicMap` along with a `CameraBoundsTileProvider` component on the Map GameObject. The `BasicMap` script renders the map at the specified latitude, longitude coordinates, and the `CameraBoundsTileProvider` updates the tiles around the main camera bounds when panned or zoomed.

{{
  <AppropriateImage imageId="unityExampleSceneVectorTileMap" className="block mx-auto" />
}}

As you can see in the image below, `BasicMap` has a reference to an instance of [MapVisualizer](/unity-sdk/overview/#introduction-to-the-maps-sdk) called BasicVectorMapVisualizer. BasicVectorMapVisualizer is a scriptable object and the root of the factory system that renders the map.

{{
  <AppropriateImage imageId="unityVectorBasicMap" className="block mx-auto my24" />
}}

Below is what the complete hierarchy of the Basic Map factory system looks like, as seen in the Map Editor window. Click `Mapbox` > `Map Editor` from the Unity Editor at the top to show the Map Editor.

{{
  <AppropriateImage imageId="unityBasicVectorMapEditor" className="block mx-auto my24" />
}}

Read more about the scripts and `ScriptableObjects` used in this example on the on the [SDK introduction page](/unity-sdk/overview/#introduction-to-the-maps-sdk).

### Interactive Styled Vector Map

When you run the Interactive Styled Vector Map example, you will notice three things: data selection, custom set decoration, and directions.

{{
  <AppropriateImage imageId="unityExampleSceneVectorTileMapInteractive" className="block mx-auto my24" />
}}

**Data selection**: The data selection feature lets you click on buildings and view the metadata associated with those buildings. `Transparent Grey`, `Transparent Blue` and `Transparent Orange Selectable` `Polygon Modifier Stacks` render the buildings and assign interactivity. They are almost identical in the Modifiers they hold. Below is a screenshot of those stacks.

{{
  <AppropriateImage imageId="unityInteractiveVectorMapEditor1" className="block mx-auto my24" />
}}

**Custom set decoration**: This feature demonstrates how landuse information on a tileset can be used to spawn prefabs at a given location on the 3D map. In this scene we have a `Park Vector Layer Visualizer` that visualizes trees in all those regions marked as parks on the landuse layer of the tileset. The `Park Vector Layer Visualizer` **Key** property is set to `landuse` to indicate that we want to only extract landuse layer features.

{{
  <AppropriateImage imageId="unityInteractiveVectorMapEditor2" className="block mx-auto my24" />
}}

**Directions**: For directions, you need the `DirectionsFactory` script on an empty GameObject. The `DirectionsFactory` script queries the [Mapbox Directions API](https://www.mapbox.com/api-documentation/#directions) for a route and then constructs a mesh along the route.

{{
  <AppropriateImage imageId="unityInteractiveVectorMapDirections" className="block mx-auto my24" />
}}


### POI Vector Map

The POI Vector Map example renders the mesh geometry the same way as the above two examples, but this example aims to show how points of interest information (the `poi_label` source layer in the `mapbox-streets-v7` tileset) can be rendered in 3D when such data exists in a tileset.

{{
  <AppropriateImage imageId="unityExampleSceneVectorTileMapPoi" className="block mx-auto" />
}}

Below is an example of how the `Modifier Stack` is set up to achieve render POI data in 3D.

{{
  <AppropriateImage imageId="unityPoiVectorMapEditor" className="block mx-auto my24" />
}}

In the stack shown above, the `Poi Demo 3D Poi Modifier` spawns a 3D POI prefab at various points of interest. To improve readability and performance, we only log the names of the points of interest in the selected region to the console instead of displaying them in the Game View. However, it should be noted that the POI label data is available with the `mapbox-streets-v7` tileset.

### Terrain Vector Map

This example is similar to the Basic Vector Map example &mdash; the only difference is that a `Terrain Factory` is used instead of a `Flat Terrain Factory` to render the terrain according to the geographical topology of the region, as opposed to a flat terrain.

{{
  <AppropriateImage imageId="unityExampleSceneVectorTileMapTerrain" className="block mx-auto" />
}}

A `Snap Terrain Modifier` is used to snap building meshes to the generated non-linear terrain. Try disabling it by unchecking the **Active** checkbox on the `Snap Terrain Modifier` to see what happens. You’ll notice that all the building meshes are rendered under the generated terrain as seen in the image below.

{{
  <AppropriateImage imageId="unityTerrainVectorMap" className="block mx-auto my24" />
}}
