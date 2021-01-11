# Build Debug Container

1. Copy the `function source` to the `build directory`.

2. Copy the python debug Dockerfile to the `build directory`.

3. Copy the python debug start script to the `build directory`.

4. Build the image.

  ```bash
  #!/bin/bash
  build -t ping-py-fn:0.0.1-debug .
  ```