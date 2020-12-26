# Web Audio API

---

## Introduction

* The `Web Audio API` provides a powerful and versatile system for controlling audio.

* `Web Audio API` processing is represent as `audio routing graph` containing:

    * `source`, `effects`, and, `destination` __nodes__.

* `AudioContext` represents an `audio-processing` graph built from `AudioNode` modules.

    * _Creates nodes_ and _controls the execution_ of audio processing.

* `AudioWorkletProcessor` represents audio processing code behind a custom `AudioWorkletNode`.

* `AudioWorkletNode` is a base class for a user-defined `AudioNode`

* `AudioNode` can be connected to an `audio routing graph` along with other `nodes`. 

---

## Usage

1. Create `audio context`.

2. Inside the context, create `sources` — such as `<audio>`, `oscillator`, `stream`.

3. Create `effects nodes`, such as `reverb`, `biquad filter`, `panner`, `compressor`.

4. Choose final `destination` of audio, for example your `system speakers`.

5. Connect the `sources` up to the `effects`, and the effects to the destination.

---

## References

* [Web Audio API - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

    * [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)

    * [AudioWorkletProcessor](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor)

        * [registerProcessor()](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope/registerProcessor)

    * [AudioWorkletNode](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode)

* [Web Audio API Spec - W3C](https://www.w3.org/TR/webaudio/)

* [Getting Started with Web Audio API](https://www.html5rocks.com/en/tutorials/webaudio/intro/)
