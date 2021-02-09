# Life of a Pixel

## Overview

* An overview of the `pipelines` and `stages` used to `render` a `pixel` in the browser.

* __WebContent__

    * `HTML`

    * `CSS`

    * `JavaScript`

    * `Images`

    * Other: `<video>`, `<canvas>`, `WebAssembly`, `WebGL`, `WEBVR`, `PDF`, etc.

* __RenderProcess__ - A `sand-boxed` process for rendering `WebContent`.

* __Blink__ - The WebContent engine run in the `RenderProcess`.

* __Rendering Pipeline__ - `input source ---> OpenGL call ---> graphics card ----> screen`

---

## Rendering Pipeline Phases - Blink Engine

1. __Input__

2. __Parsing__ - `HTMLDocumentParser ---> HTMLTreeBuilder`

    1. __DOM__ - Internal `document representation` and `JavaScriptAPI interface`.

        > NB: Custom Elements - Shadow Tree and Shadow DOM.
    
    2. __Style__ - `style properties`. Handled

        * __CSS Parser__ - `Style Engine`. `Computed styles`.

            * __CSSOM__







---

## References

* [Life of a Pixel - YouTube](https://www.youtube.com/watch?v=m-J-tbAlFic&list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx&index=5)

* [Life of a Pixel - Slides](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.ga884fe665f_64_6)