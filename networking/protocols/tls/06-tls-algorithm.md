# SSL/TLS Certificates

## Introduction

1. In `SSL`/`TLS` the process of establishing a secure connection involves several steps. 

2. The `SSL`/`TLS` security protocols use a combination of `asymmetric` and `symmetric` encryption. 

3. In `SSL`/`TLS` __handshake__ the `client` and the `server` must `negotiate the algorithms used` and `exchange key information`.

---

## Browser TLS 1.2 - Algorithmic Steps

1. __Step 1: Client Hello__ (Client → Server) 

    * The client sends a `Client Hello` to the server. It includes the following:

    1. `Client Version` - An ordered list of all the TLS/SSL protocol versions that it supports.

    2. `Client Random` - A 32-byte random number. The client random and the server random are later used to generate the key for encryption.

    3. `Session ID` - This is the session id to be used for the connection. If the session_id is not empty, the server searches for previously cached sessions and resumes that session if a match is found.

    4. `Compression Methods` - A list of methods for compressing the SSL packets. This can reduce security.

    5. `Cipher Suites` - A list of supported options. Each cipher suite contains one cryptographic algorithm for each of the following tasks: `key exchange`, `authentication`, `bulk (data) encryption`, and `message authentication`.

    6. `Extensions` - Additional configuration, `elliptic curve cryptography` parameters, etc.

    > Capture and example with `tcdump`.

2. __Step 2: Server Hello__ (Server → Client)

    * The server sends a `Server Hello` to the client. 

    * A `Server Hello` may either contain selected options from among those proposed during `Client Hello`, or, may be a `handshake failure message`.

    1. `Server Version` - The server selects the preferred version of the SSL/TLS protocol from among those presented by the client.

    2. `Client Random` - A 32-byte random number. The server random and the client random are later used to generate the key for encryption.

    3. `Session ID` - If the client Session ID was not empty, the server searches for previously cached sessions and if a match is found, that session ID is used to resume the session. If the client Session ID was empty, a new session may be created by the server and sent in the server Session ID.

    4. `Cipher Suites` - The server selects the cipher suite from among Cipher Suites sent in the `Client Hello`.

    5. `Compression Methods` - The server selects the compression method from among Compression Methods sent in the `Client Hello`.


3. __Step 3: Server Certificate__ (Server → Client)

    * The server now sends a signed `TLS/SSL certificate` that _proves its identity_ to the client. 
    
    * It also contains the `public key of the server`.


4. __Optional Step 4: Client Certificate__ (Client → Server)

    * In some cases, the server may require the client to be authenticated with a client certificate. `Mutual TLS (mTLS)`. If so, the client provides its signed certificate to the server.


5. __Step 5: Server Key Exchange__ (Server → Client)

    * The server key exchange message is sent only if the certificate provided by the server is not sufficient for the client to exchange a pre-master secret. (This is true for `DHE_DSS`, `DHE_RSA`, and `DH_anon`).


6. __Step 6: Server Hello Done__ (Server → Client)

    * The server sends this to the client to confirm that the `Server Hello` message is finished.


7. __Step 7: Client Key Exchange__ (Server → Client)

    * The Client Key Exchange message is sent right after the Server `Hello Done` is received from the server. 
    
    * If the server requests a `Client Certificate`, the `Client Key Exchange` is sent after that. 
    
    * During this stage, the client creates a `pre-master key`.


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

## Referneces

* [TLS Algorithm](https://www.acunetix.com/blog/articles/establishing-tls-ssl-connection-part-5/)