# SSL/TLS Certificates

## Introduction

1. When communicating over a secure channel it is important to know who you are communicating with.

2. `Digital Certificates` are a mechanism to ensure the `identity` of communicating parties.

    1. `Digital certificates` can be used to `sign` a `public key` to assert the identity of the `signee`.

    2. `Digital certificates` can can contain `identity information` pertaining to the owner of the `public key`.

3. `Public Key Infrastructure (PKI)` includes everything that is needed to manage `digital certificates` and `public key encryption`.

----

## Certificate Authorities and Root Certificates

1. `Certificate Authorities (CAs)` are the start of the `trust chain`.

2. `CAs` verify other `entities` (companies, organizations, individuals) and __confirm__ that they are indeed who they say they are.

3. If __confirmed__, the `CAs` signs the `entity's certificate` using their own `root certificate`.

4. The `root certificates` of all `CAs` (and therefore their `public keys`) are considered __trusted__.

5. Popular `CAs` include: `VerySign`, `IdenTrust`, `Comodo`, `DigiCert`, `GoDaddy`, `GlobalSign`, and `Symantec`.

6. The `CA root certificates` are automatically trusted by browsers.

----

## SSL/TLS Connections

1. `SSL`/`TLS` connections require a `certificate`.

    1. The `certificate` can be `signed` by anyone. It can also be `self-signed`.

2. `SSL`/`TLS` checks the `target server` has a `valid certificate` by checking it has been `signed by a root certificate`.

3. `SSL`/`TLS` checks the `target server` has a `valid certificate` for the `domain` specified.

---

## Types of SSL/TLS Certificate

1. `Single-Domain Certificates` - Apply to only one `hostname`, `domain`, or, `subdomain`.

    * e.g. For, `my.example.com` : `mail.example.com` __IS NOT__ included in the scope of the certificate.

    > Defined by a `Fully Qualified Domain Name (FQDN)`. 

2. `Wildcard Certificates` - Applies to an entire `domain` and all its `subdomains`.

    * e.g. For, `*.example.com` : `mail.example.com`, `secret.example.com`, `admin.example.com` __ARE__ included in the scope of the certificate.

    > Each subdomain can be hosted on a different server and use the same wildcard SSL/TLS certificate on multiple servers as long as the domain is the same.

3. `Multi-Domain Certificates` - Apply to several different `domain` names.

    * Each `domain` name may be a `single domain` or a `wildcard`.

    > This type of certificate is also often called a `Subject Alternative Name (SAN)` certificate.

---

## SSL/TLS Certificate Validation Levels

1. SSL/TLS certificates can have `levels validation`.

    1. `Domain Validation Certificates` - Validates domain ownership (or access to domain).

    2. `Organization Validation Certificates` - Validates domain ownership AND the owner’s identity.

    3. `Extended Validation` - Validates domain ownership, the owner’s identity, AND, the business is legally registered.

---

## Self-signed Certificate Generation

---

## CA signed Certificate Generation

1. Create a `public/private key pair` that will be used to decrypt the certificate.

2. Generate a `Certificate Signing Request (CSR)`, specifying:

    1. `Domain name` - Single, wildcard, multi-domain.

    2. `Organisation name` - NAme, country, e-mail, etc.

3. Apply for a `certificate` from a `Certificate Authority` using the `CSR` and follow the process.

4. The `.crt` file will be sent to the specified e-mail address.

---

## Web Browsers

1. `Web browsers` display information about about the `integrity` and `identity` of the target server in the `URL bar`.

2. `Web browsers` can accept additional `root certificates` by manually importing them.

3. `Web browsers` allow you to ignore insecure connection at your own risk.


---

## References

* [TLS Certificates](https://www.acunetix.com/blog/articles/tls-ssl-certificates-part-4)