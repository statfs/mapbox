---
title: "Explorer"
description: "An overview of the Explorer sample scene provided in the Mapbox Maps SDK for Unity."
topic: Data
thumbnail: unityExampleSceneExplorer
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

This guide is for v1.3 of the Maps SDK for Unity. For v1.4 and later, see the [Data Explorer documentation](/unity-sdk/overview/data-explorer/).

The Explorer example showcases Mapbox's vector data. Mapbox vector data consists of three main [tilesets](https://www.mapbox.com/vector-tiles/): Streets, Terrain, and Traffic.

{{
  <AppropriateImage imageId="unityExampleSceneExplorer" />
}}

## Data layers

The Explorer example uses a flat terrain factory and a vector factory to render the map.

The vector factory uses a long _Map Id_, `mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2,mapbox.mapbox-traffic-v1`. The server will merge these three tilesets and return them as one package, saving data size and web request count.

The vector factory also has a layer visualizer assigned to each [source layer](https://www.mapbox.com/help/define-source-layer/) inside these tilesets. For example, the Mapbox Traffic tileset has only one layer visualized as differently colored lines. The Mapbox Terrain tileset has three source layers: landcover, hillshade, and contour. The Mapbox Streets tileset is the biggest one, consisting of a variety of city elements like roads, buildings, and waterways.

It is possible to use a single layer visualizer across multiple layers, but to keep this example straightforward, each layer here has its own unique layer visualizer.

{{
<AppropriateImage imageId="unitySdkDocExplorer" className="block mx-auto" />
}}

## Use the Map Editor

To see the node editor, navigate to `Mapbox > Map Editor`.

The editor has checkboxes next to each layer to make it easier to toggle them on and off. It is useful to experiment with these toggles to see which layers change and better understand how the vector data is represented.

## Benefits and limitations

The Explorer example is useful for displaying many different types of vector data. Each layer of vector data can then be styled differently, making it possible to create complex, unique maps with rich data.

This example uses a static map and does not support zooming or panning. It also does not use any image factories to show [map styles](https://www.mapbox.com/help/define-style/), instead relying on layer visualizers. If you would like to support zooming and panning, see the [Zoomable Map example](../zoomable-map) instead.
