# Pitch Perfect

## Introduction

* WebAssembly / Rust / JavaScript / WebAudio API.

* [WebAssembly/Rust Tutorial: Pitch-perfect Audio Processing](https://www.toptal.com/webassembly/webassembly-rust-tutorial-web-audio)

---

## Init / Build

* __React wasm-audio-app__
    * `npx create-react-app wasm-audio-app`
    * `cd wasm-audio-app`
    * ...code...
    * `npm install`
    * `npm start` 

* __WebAssembly wasm-audio__

    * `cd wasm-audio-app` 
    * `cargo generate --git https://github.com/rustwasm/wasm-pack-template`
    * ...code...
    * `cd wasm-audio && wasm-pack build --target web && cd -`
    * `cp -R ./wasm-audio/pkg ./public/wasm-audio`

---

## How it Works

* Uses `React` to provide the basic UI.

* The `Pitch Detection` is implemented as a `WASM module` (wasm-audio) in `Rust`.

    > Implements the pitch detection.

    * `wasm-audio`

        * __wasm-audio/src/lib.rs__ - Implements the pitch detection.

            * `detect_pitch` takes in a set of `samples` from the `Web Audio API` and returns a `pitch frequency`.

        * __wasm-audio/src/util.rs__ - Implements the error handling.
    
    * `wam-audio` is built using `wasm-pack`

        > The package is copied to `./public` to avoid distribution to an NPM registry.

* __src/PitchNode.js__ and __src/setUp.js__

    > Handles the interaction between the `JavaScript runtime` and the `WASM module`.

    * Initialize the `AudioWorkletProcessor (PitchProcessor)` by sending the fetched WebAssembly module to the processor worklet.

    * Listens for `events` sent from the `AudioWorkletProcessor (PitchProcessor)`.

    * Handle for `'wasm-module-loaded' events`.

    * Handle for `'pitch events'`.

    * Sends `'send-wasm-module' events`.


* The compute intensive `PitchProcessor worklet` runs as a separate thread using the `Web Audio API`.

    > Runs the `WASM module` and collects the `samples`.

    * __public/PitchProcessor.js__

        * `PitchProcessor extends AudioWorkletProcessor` deals with collecting the audio `samples`.

        * Watch for `'send-wasm-module' event` from `PitchNode`.

        * _Loads_, _compiles_, and _initialises_ the `wasm-audio` module.

        * Collects _samples_ from the `Web Audio API` in a `buffer`.
        
        * When enough `samples` are collected, send them to the `wasm-audio` module via an `event` sent over a `port`.


---

## References

* [WASM Book](https://rustwasm.github.io/docs/book/)


