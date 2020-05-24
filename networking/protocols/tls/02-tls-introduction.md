# SSL/TLS Introduction

## Introduction

1. `Secure Sockets Layer` (SSL) and `Transport Layer Security` (TLS) are cryptographic security protocols.

    * `TLS` is the successor to `SSL`.

2. The purpose of TLS is to provide:

    1. `Privacy and Integrity` - Secure communication channel.
    
    2. `Identification` - Know who you are communicating with. Authenticity.

    3. `Perfect Forward Secrecy` - Old communications remain secret.

4. `TLS` is used to protect `TCP` based protocols: `SMTP`/`POP3` (e-mail), `XMPP` (instant messaging), `FTP`, `VoIP`, `VPN`, etc.

    * For example: `HTTPS`, `SMTPS`,`FTPS`, `SIPS`, etc.

5. Most `TLS` implementations are based on the `OpenSSL` library.

6. `TLS` uses `public-key cryptography (PKI)`.

    * Supports various cryptographic algorithms: `RSA`, `Diffie-Hellman`, etc.

    * The algorithms to ues are defined when setting up the `TLS session`.

    * SSL/TLS protocols use .

---

## Capabilities

1. __Privacy and Integrity__

    1. SSL uses `PKI` provides a secure encrypted connections between two communicating parties (`client` and `server`).

2. __Identification__

    1. SSL uses `PKI` to authenticate two communicating parties (`client` and `server`). One (`TLS`) or both (`mTLS`) parties know who they are talking to.

        1. When a secure connection is established, the server sends its SSL/TSL `certificate` to the client. 
        
        2. The certificate is then checked by the client against a trusted `Certificate Authority`, validating the server’s identity.

3. __Perfect Forward Secrecy__

    1. If a `private key` is compromised, `PFS`, prevents the attacker decrypting previous `TLS` communications.

---

## References

* [TLS Introduction](https://www.acunetix.com/blog/articles/tls-security-what-is-tls-ssl-part-1)
