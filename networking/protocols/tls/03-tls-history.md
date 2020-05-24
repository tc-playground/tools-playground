# SSL/TLS History

1. 1994 - The `Secure Sockets Layer` (`SSL`) protocol was introduced by Netscape.

    1. `SSL Version 1.0` was flawed and never released.

2. 1995 - `SSL Version 2.0` released. [RFC-6176](https://tools.ietf.org/html/rfc6176).

3. 1996 - `SSL Version 3.0` released.

4. 1999 - The `Transport Layer Security` (`TLS`) protocol was introduced. [RFC-2246](https://tools.ietf.org/html/rfc2246).

    1. `TLS 1.0` and `SSL 3.0` are comparable with minor differences.

5. 2006 - `TLS Version 1.1` released. [RFC-4346](https://tools.ietf.org/html/rfc4346).

    1. Adds `Protections against Cipher Block Chaining` (`CBC`).

6. 2008 - `TLS Version 1.2` released. [RFC-5246](https://tools.ietf.org/html/rfc5246).

    1. Adds `cipher-suite-specified pseudorandom functions` (`PRF`s).
    
    2. Adds `AES` cipher suite.
    
    3. Removes `IDEA` and `DES` cipher suite.

7. 2011 - `Internet Engineering Task Force` (IETF) announced that `SSL Version 2.0` is deprecated. [RFC-6176](https://tools.ietf.org/html/rfc6176)

    1. Use of `md5` for message authentication.

    2. Lack of protection for handshakes.

    3. Using the same key for message integrity and encryption.

    4. Easy session termination.

8. 2015 - `Internet Engineering Task Force` (IETF) announced that `SSL Version 3.0` is deprecated. [RFC-7568](https://tools.ietf.org/html/rfc7568).

    1. No `Authenticated Encryption with Additional Data` (`AEAD`).

    2. No `Elliptic Curve Diffie-Hellman` (`ECDH`).

    3. No `Elliptic Curve Digital Signature Algorithm` (`ECDSA`).

    4. No `stateless session tickets`.

    5. No `datagram mode of operation` (`DTLS`).

    6. No `application-layer protocol negotiation`.

9. 2018 - `TLS Version 1.3` released. [RFC-8846](https://tools.ietf.org/html/rfc8446). __All modern browsers support TLS v1.3__.

    1. Performance enhancements - handshake now requires only one round-trip (in some cases even zero). 
    
    2. Add encryption of SNI information for better privacy.
    
    3. Add new signature standard (`RSA-PSS`). 

    4. Removes `SHA-1`, `MD5`, `RC4`, `DES`, and `3DES`.

---

## References

 * [TLS (SSL) History](https://www.acunetix.com/blog/articles/history-of-tls-ssl-part-2)
