# tcpdump

## Basics

```bash
sudo tcpdump -i wlp6s0: -nn -s0 -vv port 80
```

1. __Select Network device__ - `-i ${nw-device}` -  Select a target network device.

2. __Hostname Resolution__ `-n` - A single (`n`) will NOT resolve `hostnames`. A double (`nn`) will NOT resolve `hostnames` or `ports`. 

3. __Snap length__ - `-s0` - The size of the packet to capture. `-s0` will set the size to unlimited and captures all the traffic.

4. __Verbose mode__ - `-vv`.

5. __Filter Expressions__ - `port 80` - A filter expression to extract only certain packets.

---

## References

* [tcpdump Tutorial](https://hackertarget.com/tcpdump-examples)
