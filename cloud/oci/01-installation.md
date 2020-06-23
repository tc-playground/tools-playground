# Installation

## Introductions

1. __Create account__

    1. Sign up for a new [account](https://www.oracle.com/uk/cloud/).

2. __Install OCI CLI__

    * Install the [OCI CLI](https://docs.cloud.oracle.com/en-us/iaas/Content/API/SDKDocs/cliinstall.htm)

        ```bash
        bash -c "$(curl -L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"
        ```

3. __Configure the OCI CLI__

    1. __Guided__
    
        ```bash
        oci setup config
        ```

    2. __Manual__

        1. Create `$HOME/.oci/config`.

            ```ini
            [DEFAULT]
            user=ocid1.user.oc1..<unique_ID>
            fingerprint=<your_fingerprint>
            key_file=~/.oci/oci_api_key.pem
            tenancy=ocid1.tenancy.oc1..<unique_ID>
            region=us-ashburn-1

            [ADMIN_USER]
            user=ocid1.user.oc1..<unique_ID>
            fingerprint=<your_fingerprint>
            key_file=keys/admin_key.pem
            pass_phrase=<your_passphrase>
            ```
        2.  Create and register a new `key-pair` - [Required Keys and OCIDs](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm)

            * NB: Also: `oci setup keys`
        
        3. [Update](https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm) the `$HOME/.oci/config` values.


4. __Test OCI CLI__

    1. Run `oci iam region list` to get a list of regions and check the CLI.

---

## References

* [OCI - Wikipedia](https://en.wikipedia.org/wiki/Oracle_Cloud)
