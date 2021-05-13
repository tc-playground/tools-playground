# Introduction to Encryption

* [Slides](https://on24static.akamaized.net/event/29/32/46/3/rt/1/documents/resourceList1620740974363/encryption1216201620740973363.pdf)

---

## Common security primitives.

* How to combine the common security primitives into a secure protocol?

* [crpytography.io](https://crpytography.io)

  * pip install cryptography --upgrade

* Fernet
* X.509

* Data at Rest : User database records, cloud storage, password storage, compliance.
* Data in Transit : Network communication (TLS), authentication.

---

## Symmetric Ciphers

* PlainText -> <Encryption + Key> -> CipherText -> <Description + Key> -> Plaintext

* `XOR` - Primitive - `K XOR M XOR K = M`

  > Applying XOR twice reverses its affect. e.g. A is key and B message.
  > Can mask bits and find where they come from.

  * __One Time Pad__
    * A list of random keys
    * Perfect Secrecy - Entirely depends on key. 
    * Not practical: 
        * Message need to be the same length as the key.
        * However, hard to the store or share the key.
        * Cant reuse the key.

---

* `Stream Cipher Primitive` - Primitive

  * Work on streams of any length.

  * Key + Nonce -> <KeyStream Generator> -> K0,K1,K2

  * This KeyStream is `XOR`ed with the message bits to create the output.

  * __Nonce (Number Used Once)__ - A counter that is incremented for each message encrypted. This is to prevent using the same key over and over. The Nonce is not a secret. It is sent with the message.

  > Good at encrypting a long continuous stream.
  > Fast with low memory foot print.
  > Good for low power devices.
  > Can seek to a location in the stream.

  > The KeyStream MUST appear statistically random.
  > Must never reuse key + nonce.
  > Ciphertext is not protected.

  * e.g. `CHA-CHA-20`.

---

* `Block Cipher Primitive` - Primitive

  * Works on a fixed size window (usually 128 bits).
  * Block ciphers attempt to hide the transformation.
  * Substitution/Permutation Network (SP Networks)
    * Replace Bytes with others / Swap Bytes
    * PErformed in rounds repeated many times
    * e.g `AES`. Most common. Well implemented.
    *  `Rijndael algorithm`. 
      * 128,192,256 bits; 
      * 10,12,14 rounds. 
      * SubBytes (`S-Box` - lookup table),ShiftRowss, MixColumns,KeyEditions.
      * Confusion/Diffusion.

    * Good throughput, H/W support.
  
---

* `Modes of Operation`

  * `Electronic Code Book (ECB)` - Encrypt each block one after another.
    * Leaks info if the same block is sent twice.
    * Bad
  
  * `Cipher Block Chaining (CBC)` - XOR the output of each cipher block with the next input. (Use initialization vector for first block)
    * Slow. Cant parallelize.
  
  * `Counter Mode (CTR)` - Encrypt a counter using a `nonce` for each block.
    * Slow. Can parallelize.

---

## Asymmetric Cryptography (Public Key Cryptography)

* Where do we get the shared secret from?
* How do we authenticate the endpoint is who they claim?

* Two keys - public/private
* Computationally infeasible to calculate private key from public key.
* intractable mathematical problems.

---

### Key Exchange - Diffie-Hellman

* Lets two parties agree a shared secret over an insecure channel.
* e.g. DH-KEX allows an initial shared secret to be established in TLS.

1. Create a `generator g`. Create `a very large prime number` (2000 bit)
2. Each party generates a private keys. Keeps private.
3. Each party generates a public keys using 

5. 
> The output of DH is the `pre-master secret`.

> Also Elliptic Curves instead.
  * Stronger for the same key length.

* __Ephemeral Mode__
  * Force a new key exchange (using the same key for a longtime risks compromise)
  * Perfect Forward Secrecy - If a DH key is compromised, only a few messages are compromised.

---

### RSA

* `RSA` provides both `encryptions` and `authentication`.
* `RSA` provided Public (e, n) and Private d, keys.

> Generating RSA key pairs is time consuming and done rarely.

* The keys are `reversible`. either can be used for encyption, and, the other for decryption.

* RSA provides
  1. Encryption only the owner can read.
    > __Padding__ - OAEP - Always add padding to RSA. Short messages are weak.
    > RSA is too slow for general encryption.
  2. Authenticate the owner.
    > __Signing__ - Digital signatures.
    > __Padding__
    > __DSA (Digital Signature Algorithm)__ - No reversible key property.
  
  > RSA key tend to be used for 12 months
  > RSA does not provide perfect forward secrecy.

---

## Hash Functions - Primitives

* Takes a message of any length and returns a pseudo random hash of a fixed length.
* Always return the same result for a specified input.
* Small changes in input, cause large changes in the result.
* Used for message authentication, integrity (non-tampering/CRC), passwords, etc.

* __Strong Hash Functions__

  1. Hashes cant be reversed.
  2. Given a message and it hash, we cant find another messages that hashes to the same thing. (fixed message)
  3. We cant find any two messages that have the same hash. (any message).

* Hash Functions iteratively jumble blocks of a message after another.

> Some hash functions are weak. Some are better for different things. SHA-2 is standard.

> shattered.io

* MAC Message Authentication Code
* HMACS - Splits a key in two and hashes twice.
* Guarantees who a message comes from and that it has not been tampered with.

---

## Digital Certificates

CHACHA20
AES GCM - Computes `authentication tag`.

---

## Protocol Handshakes

* SSH
* TLS
* IPSec

Issues:
* No MAC.
* No timestamp / counter (replay attacks).
* Skipping PK from authenticity.
* Reuse of Nonces or IVs.

* HSM - HArdware Security Modules.









