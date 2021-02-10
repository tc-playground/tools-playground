# Chrome 101 - Anatomy of the Browser

## Overview

* __Chromes Core Principals__ - `Speed`, `Security`, `Simplicity`, `Stability`.

* __Multi-Process__ - Easier to achieve `Speed`, `Security`, `Simplicity`, `Stability`.

    * __Browser Process__ - The `window`.

        * Central Coordinator - Most trusted.

        * Storage. Browser State.

        * Networking.

        * Draw UI.

        * Sandboxes rendering processes.

        * __Threads__ - UI, I/O (non-blocking), files.

    * __Renderer Processes__ - The `tabs`. `Blink`.

        * __Handling data from Web__ : parsing, layout, decoding, executing JavaScript.

        * Completely sandboxed.

        * On `iOS` Blink cannot be used as the Safari web engine (WebKit) must be used. 

    * __Plugin Processes__ - `Pepper`

        * Running legacy plugins.

        * Sandboxing. Prevent cross-browser exploits.
    
    * __GPU Process__

        * Compositing, scrolling.

        * Partial sandbox.

    * __Utility Processes__

        * Run short-lived code in a sandbox on behalf of the browser.

        * Installing an extension, processing JSON, etc.

    * __Extension Processes__

        * Protect against bad extension code.

        * Limit extension code to browser tab.

        * Extensions installed and uninstalled without a restart.

* __IPC - Inter-process Communication__

    * __Mojo__ 

        * `IDL` based IPC mechanism.

        * Generate bindings for different languages (and types for different API versions).

        * Hide the details of what process the caller and callee run in.

        * __Mojo Primitives__

            * `Message Pipes`, `Shared Buffers`, `DataPipes`. Process/Thread agnostic.

    * Normally `async` communication.

    * Main thread and IPC thread.

* __Sandboxing__ 

    * The sandboxing mechanism is `platform specific`.

    * Multi-level sandboxing.

* __Chrome Platform__

    * `src/chrome` - UI, browser features (bookmarks, password manager, autofill).

        * The `Chrome` browser.
    
    * `src/components` - Share browser feature with non Blink renderers, e.g. iOS.

    * `src/content` - multi-process, sandbox, web platform.

        * The `base` for `Electron`, `Home`, `ChromeCast`, etc.

* __Site Isolation__

    * As data moves online, `sandboxing` is less effective.

    * `Site Isolation` allows different parts of a `tabs content` to run in their own process if they are from different sites`.

* __Micro Services__

    * Separate services - Re-use, sandboxing, etc.

        * UI Service

        * Network Service

        * Devices

        * GPU

        * etc.
    
    * `Servicification Process Model`

        * Compose applications with a subset of services.

---

## References

* [Anatomy of the browser 101 (Chrome University 2019) - YouTube](https://www.youtube.com/watch?v=PzzNuCk-e0Y&list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx)