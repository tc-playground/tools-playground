# SSL/TLS Terminology and Basics

## Introduction

1. The primary mechanism used by `SSL`/`TLS` is `asymmetric encryption` with cipher suites.

2. `Asymmetric encryption` is also known as `Public Key Cryptography` or `PKI`.

---

## Encryption

1. `Encryption` is the process in which a human-readable message (`plaintext`) is converted into an encrypted, non-human-readable format (`ciphertext`).

2. When unencrypted data is exchanged between two parties, using any medium, a third-party can intercept (`man in the middle`) and read the communication exchanged.

3. A `Man in the Middle (MITHM) attack` implies:

    1. Loss of `confidentially` - Other can know the contents of the data.

    2. Loss of `integrity` - The data can be altered.

    3. Loss of `authenticity` - The data has been intercepted and the sender is now anonymous.

---

## Symmetric Encryption

1. `Symmetric encryption` is the process in which a __single key__ is used for encrypting and decrypting data.

* __Advantages__

    1. Fast, low resource usage.
    
    2. Simple operation.
    
    3. Secure.

* __Disadvantages__

    1. Same key used for encryption/decryption.

    2. Key must be distributed using an already established, secure channel.

    3. Different key for different parties – difficult key management/distribution.

    4. Cannot authenticate users.

---

## Asymmetric Encryption

1. `Asymmetric encryption` is the process in which a __key pair__ (`public`/`private`) are used for encrypting and decrypting data.

2. The cryptographic keys are uniquely related. 

3. Content encrypted using one key from the key pair can only be decrypted using the other. 

4. The `public key`, as the name implies, can be shared with anyone. 

5. The `private key` must be known only to the owner.

* __Advantages__

    1. Key distribution is easy.

    2. Authenticity.

    3. Integrity.

    4. Security.

* __Disadvantages__

    1. Slower than symmetric encryption.
    
    2. Needs more resources.

---

## Ciphers

1. `Ciphers` are methods/algorithms used to encrypt and decrypt data.

2. `Cipher Suites` are collections of `ciphers` available to a utility such as `TLS`.

---

### Block Ciphers

1. `Block Ciphers` split the data into `fixed length blocks` (e.g. 64-bit or 128-bit blocks) and then encrypt each block.

    * Popular block ciphers include `AES`, `Blowfish`, `3DES`, `DES` (compromised), and `RC5`.

2. `Padding` is used when the last data block being encrypted by a block cipher is too small. 

    1. The padding is usually `random data`.

3. `Initialization vectors` (`IV`) are random (or pseudorandom) fixed-size input used to initialise encryption methods.

    1. In `Cipher Block Chaining` (`CBC`) modes, each block is XOR-ed with the previous block. In this case the `IV` provides the `initial previous block`.

    2. If the `IV` is unique for each message, it is called a `nonce`, and should only be used once.
    
    3. A `nonce` should be unpredictable, it is used to prevent attackers from decrypting all messages by guessing the `IV`.

    4. Use a `nonce`, allows the _same plaintext_ to be encrypted using the _same key_ into _different ciphertext_.

4. `Block Operation Cipher Modes` define the relationships between blocks encoded using the cipher.

    1. `Electronic Code Book (ECB)` - Each block of data is encrypted separately and they are then concatenated in the original order.

        * __Advantages__

            1. Parallel processing is possible since blocks do not depend on one another. 
            
            2. An `IV` is not required.

         * __Disadvantages__

            1. If the same block of data is encrypted, it will always generate the same ciphertext.
    
    2. `Cipher Block Chaining (CBC)` - Each block is XORed with the previous ciphertext before encryption.

        * __Advantages__

            1. Eliminates the problem of repeating patterns.

         * __Disadvantages__

            1. Parallel processing is not possible since blocks do not depend on one another. 
            
            2. An `IV` is required.

            3. If part of the message is lost or corrupt, the remainder of the message is lost.

    3. `Cipher Feedback (CFB)` - Turns a `block cipher` into a `self-synchronizing stream cipher`.

        * __Advantages__

            1. If part of the message is lost or corrupt, the cipher may synchronize after several blocks and the remainder of the message is not lost.
    
    4. `Output Feedback (OFB)` - Turns a `block cipher` into a `creates a synchronous stream cipher` while preserving error correction codes.

    5. `Counter Mode (CTR)` - Turns a `block cipher` into a `creates a synchronous stream cipher` but uses a `counter` and a `nonce` for each block and does not link the blocks together.

        * __Advantages__

            1. Parallel processing is possible since blocks do not depend on one another. 

            2. If part of the message is lost or corrupt, the cipher may synchronize after several blocks and the remainder of the message is not lost.

---

### Stream Ciphers

1. `Stream Ciphers` encrypt data one `bit` or `byte` at a time. e.g. `RC4 cipher`.

2. Each `bit` or `byte` is encrypted with a different key. 

3. Stream ciphers are not used often in modern cryptography.  

---

## Message Authentication Code (MAC)

1. `Message Authentication Code (MAC)` is a method that is used to check the `authenticity` as well as the `integrity` of a message.

    1. `MAC` accepts two input parameters: a `secret key` and a `message` of arbitrary length.

    2. The result is called a `tag`.

    3. If the `MAC tag` advertised by the sender and the calculated MAC tag of the recipient message match, nobody tampered with the message.

    4. The `MAC` is sometimes called a `checksum`, `cryptographic checksum`, or `protected checksum`.

    5. `MACs` is often used for verifying the `authenticity` and `integrity` of downloads.

2. `Hash-Based Message Authentication Code (HMAC)` is a tpy eo f`MAC` that uses a `hash function`.

    ```
    HMAC_SHA256("s3cr3tk3y","Hello World") = 2d9615ee921dab63c7c4c839842703fe338db46fdf17593a681bcee2c52721de
    ```

----

## References

* [TLS Terminology](https://www.acunetix.com/blog/articles/tls-ssl-terminology-basics-part-3)