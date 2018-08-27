---
title: "Map styling"
description: "An overview of styling buildings in the Maps SDK for Unity."
topic: Styling
thumbnail: citySimPlayMode
prependJs:
  - "import AppropriateImage from '../../../components/appropriate-image';"
---

Mapbox’s Maps SDK allows developers to create custom styling for buildings in their Unity projects.

{{
  <AppropriateImage imageId="citySimPlayMode" />
}}

## Custom styles


Mapbox’s Maps SDK allows developers to create custom styling for buildings in their Unity projects. Custom styles can include user-defined architectural feature proportions, textures, and colors. Custom styles are comprised of three different building blocks:


- AtlasInfo files
- MapboxStyles materials
- Scriptable Palettes


## AtlasInfo

**Create an AtlasInfo file**

AtlasInfo files contain user-defined data that tells the Maps SDK how to organize, partition and assign sections of a texture atlas to procedurally generated buildings. They inherit from Unity’s scriptable object class, which means they can be saved in a Unity project and used in multiple scenes.

The AtlasInfo class inherits from Unity’s scriptable object class. Users can use the default Atlas Info file, or create their own by doing the following:


1. Right click or go to the **Assets** menu and navigate to `Create > Mapbox > AtlasInfo` to create an Atlasinfo file.
2. Click **Textures**.
3. Change the *Size* to 1.
4. Click **Element 0** to view the parameters.
5. Repeat steps 1-4 for **Roofs**.

{{
<AppropriateImage imageId="stylingNewAtlasinfo" className="block mx-auto" />
}}


*Textures*:
Contains a public list of texture sections for building facades.

*Roofs*:
Contains a public list of texture sections for building roofs.

Note that textures and roofs can have sections that overlap in UV space. This is very useful, as facade and roof textures can be packed either in one Atlas texture or multiple, as roof and facade geometry can use different materials.

*Texture Rect*: Position and size of texture section in UV space

  - *X*: Position of the bottom left corner of the texture section in UV space.
  - *Y*: Position of the bottom left corner of the texture section in UV space.
  - *W*: Width of the texture section in UV space.
  - *H*: Height of the texture section in UV space.

*Mid floor count*:
Number of mid floors to define in texture space. Mid floors will repeat as required to fill a given building’s height. If the mid floor count is set to 1, a single floor will be redrawn repeatedly. Mid floor counts of greater than 1 will result in a series of floors being redrawn in a repeated sequence.

*Column count*:
Number of columns to define in texture space. Columns will be repeated as necessary.

*Top Section ratio*:
Height ratio of the top floor in the section. So if a section has 8 floors (including ground and top floors) and they are all equal height, this should be 1/8.

*Bottom Section ratio*:
Height ratio of the ground floor in the section. So if the section has 8 floor (including ground and top floors) and they are all equal height, this should be 1/8.

*Preferred Edge Section Length*:
Ideal wall length. Long wall segments will be cut down to smaller chunks of this length and chosen texture section will be applied to each separately. This is a mesh generation setting, and doesn’t effect uv mapping directly.

*Floor Height*:
Single mid floor height. Even if the texture has a big mid segment that consists of multiple floors, this value represents a single one of them. This is a mesh generation setting, and doesn’t effect uv mapping directly.

*First Floor Height*:
Ground floor height. This is a mesh generation setting, and doesn’t effect uv mapping directly.

*Top Floor Height*:
This is a mesh generation setting, and doesn’t effect uv mapping directly.

**Export an AtlasInfo file as a savable template texture**

Data defined in an AtlasInfo file can be exported as a savable template texture. This texture can then be opened in an image editing program such as Adobe Photoshop or Illustrator, and used as a reference layer for constructing a texture atlas that conforms to the structure defined in the AtlasInfo.


1. From the top menu, go to `Mapbox > Atlas Template Generator`.
2. In the Mapbox Atlas Template Generator window, drag an AtlasInfo file into the *Atlas info* field, shown below.
3. Select what AtlasInfo data to render to the texture by checking *Create Facades* and/or *Create Roofs*
4. Specify a *Texture resolution*. The default is 2048 x 2048.
5. Colors are set programmatically and are for template reference only. Change the colors by clicking in their respective *Color* fields.
6. Click **Generate Template**. The tools will draw the key subsections of each texture section, such as ground/mid/top floors, columns, etc. Black lines are drawn to show subsection centers.
7. Click **Save to File** to save the generated texture out to a .png, which can then be used in an image editing software of your choice.

{{
<AppropriateImage imageId="stylingAtlasGen" className="block mx-auto" />
}}

## MapboxStyles materials

Any type of material can be used to render buildings. To take full advantage of the Maps SDK styling features, use of the MapboxStyles materials, which provide support for three colorization layers.

To specify the materials used for building visualization, go to the gameObject that contains the *AbstractMap* component. Next, navigate to the **VECTOR** settings. Under *Vector Layer Visualizers*, click on a visualizer. **ExtrudedBuildings** is selected in this example. Next, add a material for *Roof Material* and *Wall Material*. To add a new visualizer instead of using an existing one, click **Add Visualizer**. Roofs and facades can use the same material or separate ones.

{{
<AppropriateImage imageId="stylingAddMaterial" className="block mx-auto" />
}}

These layers are defined by assigning transparent mask textures to the Detail_1 and Detail_2 texture slots.

Coloring these layers can be done in one of two ways, depending on the material type used:


- MapboxStyles - allows colors for feature layers to be set directly in the material inspector. This is great if you want all buildings to have the same base, detail_1 and detail_2 colors. Change the colors by selecting the material and using the color picker. Specify the textures by clicking **Select** and adding a texture of your choice. The materials can be found by in the `Mapbox > Resources > MapboxStyles > Materials` directory.

{{
<AppropriateImage imageId="stylingSelectTexture" className="block mx-auto" />
}}


- MapboxStylesPerRenderer - colors for feature layers cannot be set in the inspector, but are set programmatically using colors defined in a scriptable palette file. This shader uses Unity’s `[PerRendererData]` tag on color properties to allow for different renderers to modify those properties at runtime without creating material instances and incurring additional draw calls. In order to use this material, a ScriptablePalette must be defined in the Material Options section of the Vector Layer Visualizer. This is great if you want to have different buildings have their base, detail_1 and detail_2 colors randomly assigned from a palette.



## Scriptable Palettes

Scriptable Palettes are containers that can generate and hold a palette of colors. They inherit from [Unity’s scriptable object class](https://docs.unity3d.com/ScriptReference/ScriptableObject.html), which means they can be saved in a Unity project and used in multiple scenes.

Scriptable Palettes require the use of `MapboxStylesPerRenderer` materials.

{{
<AppropriateImage imageId="stylingScriptPal" className="block mx-auto" />
}}

**Assign/Change the scriptable palette in use**

Select the gameObject containing the *AbstractMap* component, and navigate to the **VECTOR** settings. Navigate to `Vector Layer Visualizers > ExtrudedBuildings > Material Options > Atlas Info`.

{{
<AppropriateImage imageId="stylingChangeScriptPal" className="block mx-auto" />
}}

**Create a new Scriptable Palette**

Right click or go to the **Assets** menu and navigate to `Create > Mapbox > ScriptablePalette` to create an ScriptablePalette file.

{{
<AppropriateImage imageId="stylingNewScriptPal" className="block mx-auto" />
}}

**Generate a palette of colors**
1. Define a *Key Color*. This will be used as a ‘seed’, from which other colors will be procedurally derived.
2. Set a *Palette Size*. Choose how many colors will be in the palette.
3. Define Hue, Saturation and Value ranges.
  - *Hue Range*. Hue Range is used to define how far colors in the palette can deviate from the key color's hue.
  - *Saturation Range*. Saturation Range is used to define how far colors in the palette can deviate from the key color's saturation.
  - *Value Range*. Value Range is used to define how far colors in the palette can deviate from the key color's value.
4. Click **Generate Palette**.
5. To make any changes to your palette, repeat steps 1-4 until you are satisfied with it.
6. You can edit the final colors in the inspector.
7. If desired, set *Color Overrides*. This provides a method for directly setting colors for feature layers. For instance, enabling *Override Detail 2* could be used to directly assign a chosen color to all windows. In this case it is set to black to give buildings a night aesthetic.

{{
<AppropriateImage imageId="stylingGenerateScriptPal" className="block mx-auto" />
}}
