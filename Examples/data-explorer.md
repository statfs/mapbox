---
title: "Data explorer"
description: "An overview of the Data Explorer example scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: dataExpGameView
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

Explore Mapbox’s location data. Each map vector tile includes high levels of detail about a particular location or building that you can leverage for procedurally generating experiences or styling. The data layers include building data, points of interest (POIs), roads, and real-time traffic data. You can filter these data layers on and off as needed in the Map Editor (access through the Mapbox menu). This article explains how to use vector tiles to generate 3D features and use metadata in your application or game.

{{
  <AppropriateImage imageId="dataExpGameView" />
}}

## Data layers

The Data Explorer example scene uses a combination of the [Mapbox 3D Buildings](https://www.mapbox.com/studio/tilesets/mapbox.3d-buildings/) and [Mapbox Streets v7](https://www.mapbox.com/studio/tilesets/mapbox.mapbox-streets-v7/) tilesets to visualize a large array of features.
The scene has a comprehensive list of *Vector Layer Visualizers* as shown in the screenshot below. This article will cover the Buildings, Roads, and POI [layers](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/#layer-reference) specifically.

{{
<AppropriateImage imageId="dataExpLayerVis" className="block mx-auto" />
}}

## Buildings

To visualize buildings select the *Mapbox Streets with Building Ids* option from the *Data Source* dropdown. Next, click **Add Visualizer**, and configure it as described below. Play the scene to display the buildings from the Building layer of the tileset.

{{
<AppropriateImage imageId="dataExpBuildingLayer" className="block mx-auto" />
}}

*Primitive Type*: Vector data is made up of lines, polygons, points, or custom data. The primitive type defines the type of vector feature you are trying to access. In the case of buildings this will be “polygon” since building footprints are essentially polygons extruded by a height value.

*Layer Name*: The layer name in the tileset that contains building footprints. In the Mapbox 3D Buildings tileset, this is called `building`.

*Snap to Terrain*: This makes sure buildings snap properly to the terrain when using a terrain with elevation. When this is not checked, the buildings might spawn above or below the terrain.

*Group Features*: Check this option if you want to combine all the building meshes on a tile into a single game object. While this helps improve runtime performance, it may not offer you flexibility to perform changes on individual buildings (for example, changing the color or texture of a particular building). It may also make it impossible to use a raycast to find the address of a building.

*Collider Type*: This option is used to add a collider to the extruded buildings. The available types of colliders that you can apply to your buildings are Box Collider, Mesh Collider, or Sphere Collider. Note that if you have the *Group Features* selected, this option will add a collider to the entire tile instead of to individual buildings.

*Extrusion Type*: The extrusion type setting provides a way to specify max, min, or fixed heights for buildings. The available options are below. You will see different settings in the inspector depending on these dropdown selections.
- *None*. No extrusion.
- *Property Height*. Extrudes features using the property value.
- *Min Height*. Extrudes features using the property value. If height is not uniform, this sets height based on property's minimum height value. This results in flat rooftops.
- *Max Height*. Extrudes features using the property value. If height is not uniform, this sets height based on property's maximum height. This results in flat rooftops.
- *Range Height*. Extrudes features using the property value. Values are clamped to the min and max values if they are lower or greater than the min and max values respectively.
- *Absolute Height*. Extrudes all features using a fixed value.

*Extrusion Geometry Type*: Settings to extrude roofs, sidewalls, or both.

*Property Name*: The property in the tileset layer that is used to extrude the building. In the Mapbox 3D tileset, this is called `height`.

*Scale Factor*: The height scale factor by which you would like to extrude the buildings. For example, if this i set to `2`, the building extrusions will be done at twice the original scale.

*Texturing Style*: For more information on how this works, see the [Maps SDK for Unity styling documentation](../styling).

*Buildings With Unique Ids*: Select this only when rendering 3D buildings from the `Mapbox Streets with Building Ids` *Data Source*. Using this setting with any other polygon layers or source will result in visual artifacts.

## Roads

Roads can be visualized using the Mapbox Streets-v7 tileset with the configuration options described below.

{{
<AppropriateImage imageId="dataExpRoadLayer" className="block mx-auto" />
}}

*Primitive Type*: The primitive type defines the type of vector feature you are trying to access. For roads, this will be set to `Line`.

*Layer Name*: The layer name in the tileset that contains building footprints. In the Mapbox Streets v7 tileset, this layer is called `road`.

*Snap to Terrain*: This makes sure roads snap properly to the terrain while using a terrain with elevation. When this is not checked, the roads might spawn above or below the terrain.

*Group Features*: Check this option if you want to combine all the road meshes on a tile into a single game object. While this helps improve runtime performance, it may not offer you flexibility to perform changes to individual roads (for example, changing the color or texture of a particular road). It may also make it impossible to use a raycast to find the address of a road.

*Collider Type*: This option is used to add a collider to a road. The available types of colliders that you can apply to your roads are Box Collider, Mesh Collider, or Sphere Collider. Note that if you have the *Group Features* selected, this option will add a collider to the entire tile instead of to individual roads.

*Extrusion Type*: The extrusion type setting provides a way to specify max, min, or fixed heights for the feature. For roads, this is usually set to `Absolute height` to give a fixed height value.

*Extrusion Geometry Type*: Settings to extrude the top portion of the roads, and, if necessary, to render their side walls. This will give the roads a width.

*Property Name*: The property in the tileset layer that is used to extrude the building. In the Mapbox 3D tileset, this is called `height`.

*Scale Factor*: The height scale factor by which you would like to visualize the roads. For example, if set to `2`, the road's width and line height will be twice the original scale.

*Texturing Style*: For more information on how this works, see the [Maps SDK for Unity styling documentation](../styling).

## POIs

For POIs, there are few more configurations beyond just specifying the “Layer Name” and other properties from the tileset. Here’s a snapshot of the Parks layer from the Data Explorer scene.

Click **Advanced** and you'll see the **Filters** section. Filters allow you to filter specific points of interest using their *Key* and *Str Value* names in the tileset layer. To add a filter, click the **Add New Empty** button. Then specify the *Key* and *Str Value* along with the *Operator* to create a filter.

In the screenshot above, `type` is the name of the key under the [landuse layer](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/#landuse) and `park` is the *Str Value* under the *Key* `type`.

The *Operator* is set to *Contains*. This means the visualizer would only look for points in the tileset under the landuse layer with the `type` property value that contains the string `parks`. The visualizer will render only what is returned by this query.

The `SpawnInParkModifier` is what renders the gameObject. To add a modifier, right click and navigate to `Create > Mapbox > Modifiers` and create a modifier for your visualization. You can add as many modifiers as you need to achieve the desired effect in your scene.

{{
<AppropriateImage imageId="dataExpPoi" className="block mx-auto" />
}}

## Custom data

You can use your own data with a custom tileset using the Maps SDK for Mapbox Unity. To do so, you'll need to first [create a dataset](https://www.mapbox.com/help/add-points-pt-1/#create-a-dataset) and export it to a [tileset](https://www.mapbox.com/help/add-points-pt-1/#create-a-tileset) using [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).

For example: This custom [population density tileset](https://www.mapbox.com/studio/tilesets/peterqliu.d0vin3el/) contains a layer `outgeojson`, which contains the properties `id`, `p`, and `pkm2`. The tileset contains the population per square kilometer in the property (`pkm2`) for all areas of the United States. You can configure your *AbstractMap* component in the following way to render extrusions of various blocks of a city and visualize that data on a map.

1. Right click **MAP LAYERS** on the *AbstractMap* component.
2. Select **Custom** for the *Data Source*
3. Enter `peterqliu.d0vin3el` in the *Map Id* field. Note that you can specify the *Map Id* of any [tileset](https://www.mapbox.com/studio/tilesets/) in this field.  
4. Click **Add Visualizer** to create a new visualizer. Next, name it by clicking *Untitled* once, specifying a title and pressing `Enter`. `PopulationDensity` is used for this example, but you can name this whatever you want.
5. In the *Vector Layer Visualizer* settings, set the `Primitive Type` to **Polygon**.
6. Enter `outgeojson` for the *Layer Name*. This must match the *Layer details* for the specified tileset. For this [tileset](https://www.mapbox.com/studio/tilesets/peterqliu.d0vin3el/), it is `outgeojson`.
7. Set the *Extrusion Type* to **Property Height**.
8. Enter `pkm2` for the *Property Name*. This value must equal the name of a property on the specified tileset. For this [tileset](https://www.mapbox.com/studio/tilesets/peterqliu.d0vin3el/), it is `pkm2`.
9. Change the *Texturing Style* to **Custom**, and add a material of your choice to the *Top Material* and *Side Material* fields. Note that the `PopulationMat` material file is what produces the gradient style seen below. It is from custom code that uses the `pkm2` value to style the blocks differently. It is not included in the Maps SDK for Unity.

{{
<AppropriateImage imageId="dataExpCustomData" className="block mx-auto" />
}}

Here’s the output of that configuration when you play the scene. The screenshot below shows the population density of different blocks in San Francisco.

{{
<AppropriateImage imageId="dataExpPop" className="block mx-auto" />
}}
