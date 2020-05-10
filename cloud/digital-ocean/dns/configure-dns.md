# Configure DNS

## Introduction

1. Go to the the site of the `registrar` of the `domain`.

    ```bash
    whois <domain>
    ```

2. For the specified `domain` configure the `Digital Ocean Nameservers`

    ```
    ns1.digitalocean.com
    ns2.digitalocean.com
    ns3.digitalocean.com
    ```

3. It will take some time for the name server changes to propagate (~30 min - 2 hours).

4. After the domain is pointed to DigitalOcean’s nameservers, domain record can be managed from Digital Ocean.

---

## References

* [DNS Introduction](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts)

* [Configure Domain Registrar to point to DO Nameservers](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars)

* [Manage DNS Records](https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/)

* [Add Subdomain](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)