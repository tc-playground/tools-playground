# mTLS in Go

## Introduction

1. `TLS` (Transport Layer Security) provides the necessary encryption for applications when communicating over a network. 

    1. __Privacy__ - Communication is private.

    2. __Integrity__ - Identification of participants.

2. `TLS` requires a `CA` (Certificate Authority) to issue a `X.509` digital certificate to a `service`.

3. `TLS` requires `clients` of the `service` use the issued `X.509` digital certificate to validate the `service` with the `CA`.

4. `TLS` relies on `PKI` (Public Key Infrastructure).

5. The TLS protocol comprises two layers: 

    1. The `TLS record` protocol.
    
    2. The `TLS handshake` protocol. 

> TLS is the precursor to SSL.

---

## Algorithm Summary (TLS 1.2)


1. __Step 1: Client Hello__ (Client → Server) 

    * The client sends a `Client Hello` to the server to advertise supported options and provide client random secret.

2. __Step 2: Server Hello__ (Server → Client)

    * The server sends a `Server Hello` to the client to select supported options and provide a server random secret.

3. __Step 3: Server Certificate__ (Server → Client)

    * The server now sends a signed `TLS/SSL certificate` that _proves its identity_ to the client. 

4. __Optional Step 4: Client Certificate__ (Client → Server)

    * With  `Mutual TLS (mTLS)`. The client now sends a signed `TLS/SSL certificate` that _proves its identity_ to the server. 

5. __Step 5: Server Key Exchange__ (Server → Client)

    * The Client Key Exchange message is sent if the certificate provided by the server is not sufficient for the client to exchange a pre-master secret

6. __Step 6: Server Hello Done__ (Server → Client)

    * The server sends this to the client to confirm that the `Server Hello` message is finished.

7. __Step 7: Client Key Exchange__ (Server → Client)

    * The Client Key Exchange message is sent right after the Server `Hello Done` is received from the server. 
    
8. __Step 8: Client Change Cipher Spec__ (Client → Server)

    * At this point, the client is ready to switch to a secure, encrypted environment. 
    
    * The `Change Cipher Spec protocol` is used to change the encryption. 
    
    * Any data sent by the client from now on will be encrypted using the `symmetric shared key`.

9. __Step 9: Client Handshake Finished__ (Client → Server)

    * The last message of the handshake process from the client signifies that the handshake is finished. 
    
    * This is also the first encrypted message of the secure connection.

10. __Step 10: Server Change Cipher Spec__ (Server → Client)

    * The server is also ready to switch to an encrypted environment.
    
    * Any data sent by the server from now on will be encrypted using the symmetric shared key.

11. __Step 11: Server Handshake Finished__ (Server → Client)

    * The last message of the handshake process from the server (sent encrypted) signifies that the handshake is finished.


---

## Features

1. __Secure Private Connection__

    1. `Symmetric Cryptography` is used to encrypted the transmitted data.

    2. A `session` is established where the participant negotiated and agree upon an `encryption algorithm` and a `shared secret`.

2. __Trusted__

    1. The `identity` of the communicating parties can be authenticated using `public-key cryptography`.

3. __Reliable__

    1. The `connection` is reliable because each message transmitted includes a `message integrity check` using a `message authentication code`.

---

## Related Protocols

* `HTTPS` (Hypertext Transfer Protocol Secure) is an extension of HTTP that leverages TLS for security.

* `mTLS` or `Mutual TLS` is a process where secure transmission of data is achieved by both the `server` and the `client` by completing the TLS process in both directions.

---

## References

* [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) - Wikipedia.

* [x509](https://en.wikipedia.org/wiki/X.509) - Wikipedia

* __TLS Tutorial__

    1. [TLS Introduction](https://www.acunetix.com/blog/articles/tls-security-what-is-tls-ssl-part-1/)

    2. [TLS (SSL) History](https://www.acunetix.com/blog/articles/history-of-tls-ssl-part-2/)

    3. [TLS Terminology](https://www.acunetix.com/blog/articles/tls-ssl-terminology-basics-part-3/)

    4. [TLS Certificates](https://www.acunetix.com/blog/articles/tls-ssl-certificates-part-4/)

    5. [TLS Algorithm](https://www.acunetix.com/blog/articles/establishing-tls-ssl-connection-part-5/)

    6. [TLS Vulnerabilities](https://www.acunetix.com/blog/articles/tls-vulnerabilities-attacks-final-part/)

