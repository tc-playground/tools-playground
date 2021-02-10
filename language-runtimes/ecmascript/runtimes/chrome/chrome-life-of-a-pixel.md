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

1. __Input Parsing__ - `HTMLDocumentParser ---> HTMLTreeBuilder`

    1. __DOM__ - Internal `document representation` and `JavaScriptAPI interface`.

        > NB: Custom Elements - Shadow Tree and Shadow DOM.
    
2. __Style Computation__ - `style properties`. Handled

    * __CSS Parser__ - `Style Engine`. `Computed styles`.

        * __CSSOM__

3. __Layout__ - Layout tree computation.

    * __Block Flow__ - Inline blocks, direction.

        * __Harfbuzz__ - Fonts, Ligatures, etc.

        * __Bounding Rectangle Computation__ - `border box rect`, `overflow rect`, scroll boundaries, etc.
    
    * Other: `Table elements`, and other special layouts (east asian language)

    * __Layout Tree__ - Corresponds to the `DOM Tree`. 

        * `1:1` - except when `display: none;`, `shadow tree`, other.

* __Compositing Layer__

4. __Paint__ - Create a set of `paint ops` to send to a drawing device.

    * __Stacking Order__ - PAint uses `stacking order`, this is order by `stacking context` and `z-index`.

    * __Paint Ops__ - A descriptions of what to paint.

    * __Paint Properties__

    * `commit`.

* __CAP__ - Composition after paint. `compositor thread`.

    * __Tiling__ - Tile manager.

5. __Rasterisation__ - Pixels in memory. `GPU Process`

    * Convert a set of `paint ops` into colured pixels in `GPU Memory`.

    * Decode images resource e.g.

    * `skia` a library to help convert paint ops into a bitmap, or, into `OpenGL ops`

    * As rendering is `sand-boxed` these are sent to a separate GPU process over `IPC`.

        * Or the `paint-ops` direct directly in the GPU thread.

---

## Updates and Optimization

* Many optimization based on small things updating.

* __Animation Frames__ - 1/60 s. Batch paints into a frame for each render.

* __Invalidation__ - Only repaint things that have changed.

* __Compositing__ - Layers.

    1. Break the `Frames` into `Layers`.

        * Layers are are also define by styles options, scrolling content, etc.

    2. Recombine the Layers on a `compositor thread`.

        * Hand off to `GPU Thread` and graphics ops. e.g. `scrolling a composited layer`.
    
    * `Pending Tree ---> Active Tree`

    * `commit`/`activation`
    
    > NB: These can still be blocked by JavaScript.
---

## References

* [Life of a pixel (Chrome University 2019) - YouTube](https://www.youtube.com/watch?v=m-J-tbAlFic&list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx&index=5)

* [Life of a Pixel - Slides](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.ga884fe665f_64_6)