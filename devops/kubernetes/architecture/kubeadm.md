# Bootstrap

* `kubeadm` can be used to install the `kubernetes components on each instance` and `configure the networking`. 

* `kubeadm`  can set up and configure `kubelet`.

    * `kubelet` which is run as a `systemd` service. 

        * This is because `kubelet` defines the `CRI` implementation (e.g. `docker`) for managing the pods container life-cycle.

* `kubeadm`  can set up and configure `etcd` as `binaries` or `pods`.

* `kubeadm`  can set up and configure `kube-api-server`, `kube-scheduler`, `kube/cloud-controller-manager` as `binaries` or `pods`.

    * `K8s system components` manifests are defined in `/etc/kubernetes/manifests/`.

* `kubeadm` can alo configure Kubernetes to use the 10.244.0.0/16 CIDR range for the pod overlay networking.

    * `K8s system components` have `hostNetwork: true` if they do not require CNI container based networking.

---

## References

* [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)

* [Kubeadm](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/)

* [Install Kubeadm](https://kubernetes.io/docs/setup/independent/install-kubeadm/)

* [Kubeadm, Hops, and, Kubespray](https://www.altoros.com/blog/a-multitude-of-kubernetes-deployment-tools-kubespray-kops-and-kubeadm/)
