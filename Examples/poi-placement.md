---
title: "POI Placement"
description: "An overview of the POI Placement sample scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: poiPlacementExample
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The POI Placement example makes it possible to find, add, and style points of interest (POIs) on a map. This example shows how to place custom prefabs over specific POIs.

{{
  <AppropriateImage imageId="poiPlacementExample" />
}}

## POI placement

The POI Placement scene uses the `POINTS OF INTEREST` section in Abstract Map to place a variety of different markers at various POIs, organized by category.

{{
<AppropriateImage imageId="poiPlacementUI" className="block mx-auto" />
}}


Each layer includes a prefab and a set of rules for where to place the prefab. POI locations can be found by category (as in this example), by name ("Starbucks"), by address, or by latitude longitude coordinates. When finding POIs by category or name, it is also possible to adjust the density of results. For example, a high density of "Food" POIs will show all restaurants, cafes, and bars in an area, whereas a lower density will only show popular ones.

## Customize POI prefabs

The Unity SDK comes with a few POI prefabs, which can be edited or replaced as needed. These prefabs all have `PoiLabelTextSetter.cs` attached to them to handle variable label sizes. This script first looks for the POI's name, house number, or type. It then uses that string as a label, and applies a color background to make it readable. This background adjusts to fit the size of the string, with extra padding along the sides.

It is possible hard code a specific label, or edit the script to change label attributes such as the background style. Note that these prefabs are all 2D sprites and TextMeshes that face the camera, but any style of prefab will work and `PoiLabelTextSetter.cs` does not necessarily have to be used.

## Benefits and limitations

POI Placement makes it easy to add a variety of POI prefabs to a map, by category, name, address, or latitude and longitude. These prefabs can be 2D or 3D, though the scene uses 2D prefabs.

These POIs do not explicitly interact with the map and will not necessarily replace any vector features. This example is best used for marking POIs on a map.
