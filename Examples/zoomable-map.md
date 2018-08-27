---
title: "Zoomable Map"
description: "An overview of the Zoomable Map sample scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: unityExampleSceneZoomableMap
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The Zoomable Map example allows you to create a runtime zoomable and pannable map. This example is a starting point for creating a traditional web-based zoomable map.

{{
  <AppropriateImage imageId="unityExampleSceneZoomableMap" />
}}

## Place custom markers

Placing custom markers on zoomable and non-zoomable maps is mostly a similar process, with one exception. Since the [zoom level](https://www.mapbox.com/help/define-zoom-level/) of a zoomable map can change at runtime, the marker positions need to be updated in every frame. The Zoomable Map example handles this with a script called `SpawnOnMap`.

`SpawnOnMap` provides an outline of placing custom markers. It uses the `Start()` function to calculate initial marker positions, then uses `Update()` to update those positions every time the map changes (either from zooming or panning).

```
...
void Start()
{
  _locations = new Vector2d[_locationStrings.Length];
  _spawnedObjects = new List<GameObject>();
  for (int i = 0; i < _locationStrings.Length; i++)
  {
    var locationString = _locationStrings[i];
    _locations[i] = Conversions.StringToLatLon(locationString);
    var instance = Instantiate(_markerPrefab);
    instance.transform.localPosition = _map.GeoToWorldPosition(_locations[i], true);
+   instance.transform.localScale = new Vector3(_spawnScale, _spawnScale, _spawnScale);
    _spawnedObjects.Add(instance);
  }
}

private void Update()
{
  int count = _spawnedObjects.Count;
  for (int i = 0; i < count; i++)
  {
    var spawnedObject = _spawnedObjects[i];
    var location = _locations[i];
    spawnedObject.transform.localPosition = _map.GeoToWorldPosition(location, true);
  }
}
...
```

### Using the `SpawnOnMap` example script

To use the `SpawnOnMap` script, add it as a `Component` to a Map `GameObject`. Below is a description of the variables.

| Variables | Description |
|-----------|-------------|
| Map | Map object on which to place custom markers.|
| Location Strings | List of locations in `latitude, longitude` where the markers will spawn. |
| Spawn Scale | Scale of spawned markers. Applied as uniform scale in all directions.|
| Custom Prefab | Prefab that will be spawned on the map as the marker.|

{{
  <AppropriateImage imageId="unitySdkDocSpawnonmap" className="block mx-auto" />
}}

## Understand QuadTree tile provider

[Web Mercator](https://en.wikipedia.org/wiki/Web_Mercator) tile services use a [quadtree](https://www.mapbox.com/help/define-quadtree/) structure to provide tiles at different zoom levels. The `QuadTreeTileProvider` script leverages this quadtree stucture to request tiles for the area of interest. `QuadTreeTileProvider` uses the location in `latitude, longitude`, the camera's viewport, and the map's zoom level to determine the area of interest.  

`QuadTreeTileProvider` provides a way to create a zoomable map without moving the camera in the scene. The map's root and individual `UnityTile` objects are scaled appropriately to provide zooming capability, similar to traditional web-based maps. `QuadTreeTileProvider` also provides an API call to update the map when the location and/or zoom level changes.

## Benefits and limitations

Using this map gives you a runtime, zoomable map instead of a static map. It takes care of the tile scaling and map scaling for you so you can easily look at a map at different zoom levels. It also decouples the camera from the map for zooming.

By default this example only provides a top-down 2D view of the map, without vector data.
