# openssl

# openssl

## Introduction

* `openssl` is a toolkit for the `Transport Layer Security (TLS)` and `Secure Sockets Layer (SSL)` protocols.

---

## Tasks

1. Generate a `PEM` format certificate for `localhost`

    ```bash
    openssl req -newkey rsa:2048 \
        -new -nodes -x509 \
        -days 3650 \
        -out cert.pem \
        -keyout key.pem \
        -subj "/C=US/ST=California/L=Mountain View/O=Your Organization/OU=Your Unit/CN=localhost"
    ```

2. Validate certificate

    ```bash
    openssl verify -verbose -CAfile <(cat ~/Downloads/DigiCertTLSRSASHA2562020CA1.crt.pem ~/Downloads/DigiCertGlobalRootCA.crt.pem) ~/.ssh/sasjc.crt
    ```

3. Check certificate 

    ```bash
    openssl x509 -noout -text -in <path/to/cert.crt>
    ```

---

## References

* [openssl - Home](https://www.openssl.org/)
