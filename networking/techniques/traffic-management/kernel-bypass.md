# Kernel Bypass

## Introduction

* Normally `network packets` arriving on the `NIC` are passed to the `kernel networking stack` for processing.

* In `kernel bypass mode` these packets are instead passed to a `user-space networking stack` for processing.

* In `partial kernel bypass mode` (`bifurcated driver) some packets are sent to the `kernel networking stack` and some to the `user-space networking stack` for processing.