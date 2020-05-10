# doctl Commands

## Account Commands

* __Get Account__ - `doctl account get`

* __List Auth__ - `doctl auth list`

* __Switch Auth__ - `doctl auth switch --context <name>`

---

## Compute Meta Commands

* __List Regions__ - `doctl compute region list`

* __List Droplet Sizes__ - `doctl compute size list`

---

## Compute Image Commands

* __List Public Images__ - `doctl compute image list --public`

* __List Private Images__ - `doctl compute image list`

---

## Compute SSH Commands

* __List SSH Keys__ - `doctl compute ssh-key list`

---

## Compute Droplet Commands

* __List Droplets__ - `doctl compute droplet list`

* __Create Small Droplet__ - With pre-registered SSH key.
    
    ```bash
    SSH_KEYS=$(doctl compute ssh-key list -o json | jq  -c '.[] | select( .name | contains("occam-linux") ) | .id')
    doctl compute droplet create \
        --region lon1 \
        --image ubuntu-18-04-x64 \
        --size s-1vcpu-1gb \
        --ssh-keys <SSH_KEYS> \
        <DROPLET-NAME>
    ```

    * NB: `ssh` password will be sent in email.

* __Get Droplet__ - `doctl compute droplet get <DROPLET-ID> -o json`

* __Delete Droplet__ - `doctl compute droplet delete <DROPLET-ID>`
