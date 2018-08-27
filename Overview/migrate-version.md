---
title: "Migrating to v1.4"
description: "A guide to migrating your project from earlier versions of the Maps SDK for Unity to v1.4+"
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---
CAUTION: Create a back up of your project to a new folder before migrating to the Maps SDK for Unity v1.4 or higher. You will need this backup project to perform the migration process smoothly.

## Upgrade the Maps SDK for Unity

If you did not change any source files from the previous version, you can skip ahead to the Map setup section of this guide.

1. Import the latest version of the [Maps SDK for Unity](https://www.mapbox.com/install/unity/) to a newly created project named `NewSDK1.4`.
2. Next, delete all of the old Mapbox folders from your existing project (let’s call it `OldSDK1.3`). Tip: compare your project folders with the `NewSDK1.4` project to figure out which files and folders to delete.
3. Finally, copy the new folders from the `NewSDK1.4` project to your existing project.
4. Do a diff of all the files that changed. Use a file comparison/diff tool like [Sourcetree](https://www.sourcetreeapp.com/) or [TortoiseGit](https://tortoisegit.org/) to make this process easier. Pay close attention to any files from the Maps SDK for Unity that you changed earlier.
5. If you changed any files, carefully perform a manual merge rather than relying on a version control tool to do an automatic merge for you.

## Map setup
1. Once you have resolved any compiler errors in Unity, the next step is to resolve the missing script reference on the map game object. `AbstractMap` has a lot more functionality in v1.4.0 and later versions. You no longer need to add explicit Map types (Basic Map, MapAtSpecificLocation etc.).
2. `AbstractMap` can be set up to function the same way as any of the v1.3 Maps. To do so, drag and drop the `AbstractMap` script to replace the missing script field. Refer to the table below to select the correct option for your map.

| **v1.3 Map name**        | **v1.4 Abstract Map Placement Type** | **v1.4 Abstract Map Scaling Type** |
| ------------------------ | ------------------------------------ | ---------------------------------- |
| Basic Map                | At Tile Center                       | Custom                             |
| Quad Tree Basic Map      | At Location Center                   | Custom                             |
| Map At Specific Location | At Location Center                   | Custom                             |
| Map At World Scale       | At Location Center                   | World Scale                        |


## Tile provider setup
1. You are no longer required to add `TileProviders` explicitly, because in v1.4+ they are added to the map using the `ExtentOptions`. If you still want to add a custom `TileProvider`, you can do this by selecting the **Custom** option from the *Extent Options* menu. Refer the table below to select the correct setting for your `TileProvider`.

| **v1.3 Tile Provider**           | **v1.4.0 Extent Option** | **Remove v1.3 Component** |
| -------------------------------- | ------------------------ | ------------------------- |
| CameraBoundsTileProvider         | CameraBounds             | Yes                       |
| QuadTreeTileProvider             | CameraBounds             | Yes                       |
| RangeTileProvider                | RangeAroundCenter        | Yes                       |
| RangeAroundTransformTileProvider | RangeAroundTransform     | Yes                       |
| Any Custom Tile Provider         | Custom                   | No                        |

## MapVisualizer setup

Starting with v1.4.0, `MapVisualizer` will be set up automatically using the settings under the **IMAGE**, **TERRAIN** and **VECTOR** sections. To migrate v1.3 MapVisualizers to v1.4, follow the steps below.


1. Open two separate instances of Unity. One instance will be your existing project, and the other will be the new project with the updated version of the Maps SDK for Unity.
2. Next, open the **Map Editor** on your existing project by navigating to `Mapbox > Map Editor` from the top menu. Carefully go through every node of in your existing project and populate the fields on the `AbstractMap` script in the new project. You can find information on how the `AbstractMap` script can configured on the [Introduction to the Maps SDK page](overview/#introduction-to-the-maps-sdk).
- Map Image Factory → **IMAGE**. `MapImageFactory` in v1.3 can now be set up using the options available under **IMAGE** section of `AbstractMap`.
- Terrain Factory → **TERRAIN**. `TerrainFactory` in v1.3 can now be set up using the options available under **TERRAIN** section of `AbstractMap`.

| **v1.3 Terrain Factory name** | **v1.4 Elevation Layer Type**                          |
| ----------------------------- | ------------------------------------------------------ |
| FlatTerrainFactory            | FlatTerrain                                            |
| LowPolyTerrainFactory         | LowPolygonTerrain                                      |
| TerrainFactory                | TerrainWithElevation ( Add SideWalls option unchecked) |
| TerrainWithSideWallsFactory   | TerrainWithElevation ( Add SideWalls option checked)   |
| FlatSphereTerrainFactory      | GlobeTerrain                                           |



- Vector Tile Factory → **VECTOR**. `VectorTileFactory` in v1.3 can now be set up using the options available under **VECTOR** section of `AbstractMap`.
  - The new `AbstractMap` automatically applies default modifiers when choosing **Point**, **Line**, **Polygon** in the *Primitive Type* settings. See the table below for the conversions:

| **Primitive Type** | **Default Mesh Modifiers** | **Default Game Object Modifiers** |
| -------------------------------- | ------------------------ | ------------------------- |
| Polygon         | PolygonMeshModifier, UVModifier, HeightModifier           | MaterialModifier                       |
| Line             | LineMeshModifier, HeightModifier             | MaterialModifier                       



  - `SnapTerrainModifier` in v1.3 is now configured by the *Snap To Terrain* checkbox.
  - If you are using a `MergedModifierStack` in 1.3, you will need to use the *Group Features* checkbox.
  - `ColliderModifier` in v1.3 is now set by the *Collider Type* menu which allows you to choose the type of collider you want to add to the extruded geometry.
  - Select **Custom** for the *Primitive Type* if you don’t want any default modifiers to be attached.
3. Compare your new project to your old project, going through every game object one by one. Make sure all of the scripts have identical values and have been serialized properly.

## API changes
  -  If you are using `Initialize()` to load a new location after you have already initialized the map, replace it with the new `UpdateMap()` method which takes in the same arguments. The `AbstractMap` class has the `Initialize()`, `UpdateMap()` and `ResetMap()` methods.
  - If you are using `InitializeMapWithLocationProvider`, make sure that the *Initialize On Start* checkbox on the `AbstractMap` script is unchecked.
  - The new `LocationProviderFactory` script has a serialized *Map Manager* reference. Make sure you have serialized it with the corresponding `AbstractMap` reference.
