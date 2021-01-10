# kubeconfig

## Introduction

* `kubeconfig` is the configuration file for `kubectl`

* `kubeconfig` is by default normally located at `$HOME/.kube/kubeconfig`

* `kubeconfig` denotes which `kubernetes cluster` you are interacting with when using `kubectl`.

* `kubeconfig` files manage the following resources:

    * `clusters` - The Kubernetes `cluster api endpoint`.

    * `users` - The `credential`

    * `contexts` - `<user> + <cluster>` - Defines a user logon to cluster.

* `kubectl` can select a specific `context` within a `kubeconfig` file. to interact with a specific cluster as a specific user. 

* It is possible to have multiple `kubeconfig` files.

    * The `KUBECONFIG` environment can be use to configure `kubectl` to use a specific `kubeconfig`.

        * It is possible to have multiple `:` delimited paths. This effectively merges the contexts together.

    * The `kubectl` option `--kubeconfig="$PATH"` can be use to configure `kubectl` to use a specific `kubeconfig`.

> It is possible to have multiple kubeconfig files with multiple contexts.

---

## Commands

* `kubectl config current-context` - Will get the currently configured context.

* `kubectl config get-contexts` - Will list the available contexts.

* `kubectl config use-context $NAME` - Will use the specified context.







