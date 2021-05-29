## Security and HTTPS


* __HTTP__ - Permits MITM attacks.

* __Encryption__

    * __Symmetric__ - 1 keys

    * __Asymmetric__ - 2 Keys - Public/Private keypair. 
    
        * CipherText encrypted by ine key can only be decrypted by the other.

        * The public key can be used to check if someone has the private key.

* __HTTPS__

    * __TLS__

        * `TLS handshake`.

        * `SSL certificates` - x509 - Contains :

            * `server public key`

            * `Server details` - `DNS`, company info, etc.

            * `Digital Signature` - Token signed by the `private key` of the `CA`. 

                * `Certificate Authority (CA) proof the public key comes from the server`.

                * `Digital Signature` is checked with `public key` found on the machine/browser `Root Certificate Store`.

            > Prevent a malicious actor inserting their own Public Key.
    
    * __TLS Handshake Process__

        1. __Client__ - `ClientHello` (random bytes string)

        2. __Server__ - `ServerHello` + `SSLCertificate{ServerPublicKey}` (random bytes string)

        3. __Client__ - Validates `SSL Certificate` using the digital signature of the `CA` and `public key` in `OS Store`.
        
        4.  __Client__ - `encryptWithServerPublicKeu(PremasterSecret)`

        5. Now both Client and Server have: `{ClientHello, SeverHello, PremasterSecret}`

            * Create `4 session keys`. Used for one session.

---

## Security And HTTPS

While network security is of critical importance to virtually any system, it's beyond the scope of most system design interviews.

That being said, having even a cursory understanding of a few key concepts could very well materialize into the edge you need to ace your interview and secure—pun perhaps intended—a job offer.

### Client

A machine or process that requests data or service from a server.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

### Server

A machine or process that provides data or service for a client, usually by listening for incoming network calls.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

### IP Packet

Sometimes more broadly referred to as just a (network) packet, an IP packet is effectively the smallest unit used to describe data being sent over IP, aside from bytes. An IP packet consists of:

### HTTP

The HyperText Transfer Protocol is a very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response.
Requests typically have the following schema:

<empty string>
Responses typically have the following schema:

<empty string>

### Man-In-The-Middle Attack

An attack in which the attacker intercepts a line of communication that is thought to be private by its two communicating parties.

If a malicious actor intercepted and mutated an IP packet on its way from a client to a server, that would be a man-in-the-middle attack.

MITM attacks are the primary threat that encryption and HTTPS aim to defend against.

### Symmetric Encryption

A type of encryption that relies on only a single key to both encrypt and decrypt data. The key must be known to all parties involved in communication and must therefore typically be shared between the parties at one point or another.
Symmetric-key algorithms tend to be faster than their asymmetric counterparts.
The most widely used symmetric-key algorithms are part of the Advanced Encryption Standard (AES).

### Asymmetric Encryption

Also known as public-key encryption, asymmetric encryption relies on two keys—a public key and a private key—to encrypt and decrypt data. The keys are generated using cryptographic algorithms and are mathematically connected such that data encrypted with the public key can only be decrypted with the private key.
While the private key must be kept secure to maintain the fidelity of this encryption paradigm, the public key can be openly shared.

Asymmetric-key algorithms tend to be slower than their symmetric counterparts.

### AES

Stands for Advanced Encryption Standard. AES is a widely used encryption standard that has three symmetric-key algorithms (AES-128, AES-192, and AES-256).
Of note, AES is considered to be the "gold standard" in encryption and is even used by the U.S. National Security Agency to encrypt top secret information.

### HTTPS

The HyperText Transfer Protocol Secure is an extension of HTTP that's used for secure communication online. It requires servers to have trusted certificates (usually SSL certificates) and uses the Transport Layer Security (TLS), a security protocol built on top of TCP, to encrypt data communicated between a client and a server.

### TLS

The Transport Layer Security is a security protocol over which HTTP runs in order to achieve secure communication online. "HTTP over TLS" is also known as HTTPS.

### SSL Certificate

A digital certificate granted to a server by a certificate authority. Contains the server's public key, to be used as part of the TLS handshake process in an HTTPS connection.

An SSL certificate effectively confirms that a public key belongs to the server claiming it belongs to them. SSL certificates are a crucial defense against man-in-the-middle attacks.

### Certificate Authority

A trusted entity that signs digital certificates—namely, SSL certificates that are relied on in HTTPS connections.

### TLS Handshake

The process through which a client and a server communicating over HTTPS exchange encryption-related information and establish a secure communication. The typical steps in a TLS handshake are roughly as follows:

