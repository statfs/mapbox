---
title: "Introduction"
description: "An introduction to the Mapbox Maps SDK for Unity."
imageAlt: "Mobile devices displaying applications using the Mapbox Maps SDK for Unity."
overviewHeaderProps:
  imageId: "unitySdkDocHeader"
  sdk: Maps SDK for Unity
  versionConstant: VERSION_UNITY_SDK
  changelogLink: "https://www.mapbox.com/mapbox-unity-sdk/docs/05-changelog.html"
  ghLink: "https://github.com/mapbox/mapbox-unity-sdk"
  installLink: "https://www.mapbox.com/install/unity"
  sdkFeatures:
    - "Vector map of the world"
    - "Cloudless satellite base map"
    - "Global digital elevation model"
    - "Custom data"
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

The Maps SDK for Unity is a collection of tools for building Unity applications from real map data. It enables Unity developers to interact with Mapbox web services APIs (including the Maps, Geocoding and Directions APIs) and create game objects via a C#-based API and graphical user interface.

## Getting started

To install the Maps SDK for Unity, follow the instructions in the [installation guide](https://www.mapbox.com/install/unity/). Once installed, you can start exploring some of our existing examples in the SDK or read our [step-by-step tutorials](/unity-sdk/tutorials/).

### Example scenes

The Maps SDK for Unity comes with several example scenes to showcase various features and possibilities of the SDK. You can find these scenes by navigating to `Mapbox > Setup`, or by looking at the Examples folder in the Project window and double-clicking on a **Scene file** to open it. Look at the [installation guide](https://www.mapbox.com/install/unity/) for more information.

## Introduction to the Maps SDK

The Mapbox Maps SDK for Unity contains several scripts and `ScriptableObjects` that work together to enable various features:

- *AbstractMap*: The core component and interface to interact with Mapbox data services. AbstractMap provides a unified user interface to setup and customize the properties and styling.
- *MapVisualizer*: Visualizes a map. A MapVisualizer creates the requested tiles and relays them to the necessary factories. MapVisualizer is automatically setup using the properties in the AbstractMap UI.
- *Factory*: Processes terrain, image, and vector data of maps for rendering. AbstractMap UI exposes factories under the `Image`, `Terrain` and `Vector` panels.
- *LayerVisualizer*: Receives vector data to create and style features (such as buildings) as a [layer](https://www.mapbox.com/help/define-layer/) on the map. LayerVisualizers are listed under the `Vector` panel of the AbstractMap UI.
- *Stacks and Modifiers*: Stacks are collections of modifiers. Modifiers are scripts that create, modify, and style [features](https://www.mapbox.com/help/define-features/).

## Map Editor

The Map Editor is a modular, tree-like node editor designed to help developers create their custom map visualizations. It can be found under `Mapbox > Map Editor` in the Unity top bar. While it is not necessary to use, it is a valuable tool for navigating and understanding the underlying structure of a map.

Each node is a ScriptableObject in the [mesh generation structure](https://www.mapbox.com/help/unity-mesh-pt-1/), and corresponds directly to a file in the project. Click on a node to see its settings in the Inspector panel.

The Map Editor also includes checkboxes next to the vector factory's layer visualizers, which allows you to toggle them on and off. This allows for quick customizations of which [layers](https://www.mapbox.com/help/define-layer/) to show.

{{
<AppropriateImage imageId="unitySdkDocMapeditor" className="block mx-auto" />
}}

## Custom styles

Image, terrain, and vector layers now come with default styles. These are default sources which provide an easy way to access Mapbox's rich data. You can select one of the generic Mapbox styles, or select "Custom" to use a custom style.

For image layers, select "Custom" to use a custom style from [Mapbox Studio](https://www.mapbox.com/mapbox-studio/).

There are two ways to specify a custom style:

- Copy a [style URL](https://www.mapbox.com/help/define-style-url/) from your Mapbox Studio account and paste it into the `Id` field of your image factory.
- Search for a style linked to your account. *Note: to search for a style, you may have to generate a new access token with `styles:list` scope enabled. If you had to create a new access token, remember to swap it out with the old token in your Mapbox Setup panel.*

After specifying a custom style, the map will render the new style when you play the scene. You can further customize your map style in Mapbox Studio. Note that there may be some differences in color quality and resolution between Mapbox Studio and Unity: this is expected.

"Mapbox Streets With Building Ids" combines [Mapbox-Streets-v7](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/#layer-reference) vector data with our experimental 3D buildings data, which assigns unique id's to building features to avoid visual artifacts for buildings at tile borders.

## Using this documentation

### Overview

The _Overview_ section contains guides introducing concepts related to the Maps SDK for Unity. Some of these guides walk through core concepts as illustrated in the example scenes that are provided with the Maps SDK. Read more about each of these examples:

- [Explorer](/unity-sdk/overview/explorer/): Showcases Mapbox's vector data.
- [Location based game](/unity-sdk/overview/location-based-game/): Shows how to position and orient a `Player` GameObject on a map.
- [Vector tile maps](/unity-sdk/overview/vector-tile-maps/): Shows how to utilize vector tiles to generate 3D features as well as utilizing such metadata in your app or game.
- [Zoomable maps](/unity-sdk/overview/zoomable-map/): Allows you to create a runtime zoomable and pannable map.

You can also learn how to add attribution to Unity applications that use the Mapbox Maps SDK for Unity in the [Attribution](/unity-sdk/overview/attribution/) guide.

### Tutorials

The [Tutorials](/unity-sdk/tutorials/) section contains a list of step-by-step tutorials for using the Maps SDK for Unity.

### API reference

In the [API reference](https://www.mapbox.com/mapbox-unity-sdk/api/), you can view the complete reference documentation for the Maps SDK for Unity.
