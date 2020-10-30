# STM32 F4xx Development

## Create uVision Project

1. Install `Keil uVision v5`, `STFM32CubeMX`, `ST-Link`.

2. In `uVision` create a new project for `STFM32` project for the required board subtype.

    1. Select `CMSIS -> CORE` for base `HAL`.

    2. Select `Device -> Start Up` for base `init files`.

3. Select `Options for Target` button

    1. Set `Target`, `Xtal` to `16.0` MHz

    2. Set `Link`, `Use` to `ST-Link Debugger`.

        1. Select `Settings -> Flash Download -> Reset and Run` to automatically run after program upload.
