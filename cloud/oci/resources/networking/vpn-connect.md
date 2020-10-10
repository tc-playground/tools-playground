# VPN Connect

## Introduction

* Makes a private end to end connection between two private networks over the public internet.

* `tunnel` - Deliver packets to private `RFC 1918` addresses.

* `IPSec` authentication and encryption.

* __Routing__

    * `static routing` - Send traffic to preconfigured destinations.
    
    * `dynamic routing` - Use a `routing protocol (BGP)` to determine where to send traffic. 

* __Transport__

    * `transport mode` - Encrypt only the contents of the packets and not headers. Not support in OCI.
    
    * `tunnel mode` - Encrypted everything and re-encapsulate packets.

---

## Resources

* [VPN Connect - 100](https://www.youtube.com/watch?v=gDtMTasZfVY)