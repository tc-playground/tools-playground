# Google Cloud Overview

## Introduction

* `Google Cloud` is a cloud computing service offered by `Google Corporation` providing `servers`, `storage`, `network`, `applications` and `services`.

* `Google Cloud` is provided through a global network of `managed data centers`. 

* `Google Cloud` service can be provisioned on demand over the Internet. 

---

## Google Cloud

* [Google Cloud Console](https://console.cloud.google.com)

---

## Google Developers

* [Google Developers Console](https://console.developers.google.com)

    * __Manage__ Projects

    * __Search__ APIs.

        * e.g. `Maps JavaScript API` - The JavaScript API for Google Maps.

    * __Create__ API keys.

        * e.g. `Maps JavaScript API`

    * __Reference Scripts and Resources__

        * Embed APIs as scripts:

            ```html
            <html>
                <body>
                    <script src="https://maps.googleapis.com/maps/api/js/key={$KEY}"></script>
                    <script src="./src/index.ts"></script>
                </body>
            </html>
            ```

        > `npm install @types/googlemaps` to add type definition file for TypeScript projects and gain access to the `name space`.