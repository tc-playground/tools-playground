# Start Python local function container

```bash
#!/bin/bash
/usr/local/bin/docker run -dt \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -e FN_LISTENER=wobble \
  -e FN_FORMAT=http-stream \
  -p 1234:1234 \
  -p 5678:5678 \
  -v /Users/tlangfor/Work/spaces/faasinate-playground/applications/some-test-app/some-test-fn/func.py:/function/func.py \
  --name some-test-fn \
  some-test-fn:0.0.1-debug
```

