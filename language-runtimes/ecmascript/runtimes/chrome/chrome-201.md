# Chrome 201 - Anatomy of the Browser

## Overview

* `browser process` is the `top-level` process.

    * `BrowserProcess`
    * `content::BrowserMainLoop`
    * `content::BrowserMainParts`
    * `ChromeBrowserMainParts`

* `chrome` (browser) _embeds_ `content` (web pages).

* __Profiles__

    * `Profile <--- content::BrowserContext` - Normal.
    * `Profile <--- OffTheRecordProfile` - Incognito / GuestMode (with temporary base profile).
    * __Storage__
        * `Default Storage Partition` - `WebViews` have a storage partition.

* __Chrome UI__

    * `Windows` belong to `Profiles`.
    * `TabStripModel` - Tabs.
    * `WebContent` - Web pages. _Observer Pattern_. _Delegate Pattern_.
        * `WebContentsObserver` - Observes WebContents.
        * `WebContentsDelegate` - Is called by WebContents. e.g. `open a file`.
        * `WebContentUserData` - IS owned by a WebContents to managed state.
        * `Client` - WebContent has a `client` which is the thing `embedding it`.
    * `base::SupportsUserData:Data` - Add user data support to a component.
    * `KeyedService`

* __RenderProcess__ - Multiple `render proccesses`.

    * `RenderFrameHost` - Content. Browser.
    * `RenderFrame` - Content. Renderer.
    * `WebLocalFrame` - Blink (HTML Render). Renderer.
    * `LocalFrame` - Blink (HTML Render). Renderer.

    > Communicating over `mojo` IPC system.

* __Site Isolation__

    > Code from different `origins` are run in different processes.

* __iFrames__

    * `iFrame` creates a new content area and loads a new `document` in it.

    * `iFrames` form a `Frame Tree`.

> Avoid globals. Each object should have a well defined lifetime.