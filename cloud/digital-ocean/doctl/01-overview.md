# doctl Command

## Introduction

* `doctl` is the CLI for the `Digital Ocean (DO)` cloud service. 

* `doctl` allows you to create, manage, and delete `Digital Ocean` resources. 

* `doctl` requires that an `API token` has been generated and configured in order to authenticate and perform operations.

---

## Installation

1. [Install doctl CLI](https://www.digitalocean.com/docs/apis-clis/doctl/how-to/install)

---

## Configuration and Authentication

1. [Create Access Token](https://cloud.digitalocean.com/account/api/token) via web console.

2. __Initialise CLI Auth Context__

    ```bash
    doctl auth init --context <name>
    doctl auth list
    doctl auth switch --context <name>
    doctl completion bash
    ```

3. Config - `$HOME//.config/doctl/config.yaml`

4.  [Configure SSH Key for Droplets](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/)

---

## Usage

1. [doctl - Command Line Reference](https://www.digitalocean.com/docs/apis-clis/doctl/reference/)

2. __Command Overview__

    * `account`         Display commands that retrieve account details.

    * `auth`            Display commands for authenticating doctl with an account.

    * `balance`         Display commands for retrieving your account balance.

    * `billing-history` Display commands for retrieving your billing history.

    * `compute`         Display commands that manage infrastructure.

    * `databases`       Display commands that manage databases.

    * `invoice`         Display commands for retrieving invoices for your account.

    * `kubernetes`      Displays commands to manage Kubernetes clusters and configurations.

    * `projects`        Manage projects and assign resources to them.

    * `registry`        [EA] Display commands for working with container registries.

    * `vpcs`            Display commands that manage VPCs.

---

## Quick Create/Destroy Droplet

```bash
doctl account get
doctl compute droplet create --region sfo2 --image ubuntu-18-04-x64 --size s-1vcpu-1gb <DROPLET-NAME>
doctl compute droplet list
doctl compute droplet get <DROPLET-ID> -o json
doctl compute droplet delete <DROPLET-ID>

```