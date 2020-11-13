# NFS

## Set-up

1. Install NFS on the server.

2. Define client access to server resources through the /etc/exports file.

3. Update NFS on the server.

4. Install NFS on the client.

5. Mount an NFS share.

6. Configure the NFS share to mount at boot time.

7. Open any firewalls you’ve got running (if necessary).

---

## Install Server

* Ubuntu - `nfs-kernel-server` / CentOS - `nfs-utils`.

    ```bash
    sudo apt install nfs-kernel-server
    ```

---

## Define Access

* Access is defined via the `/etc/exports` file.

    ```bash
    ubuntu@ip-172-31-40-212:~$ cat /etc/exports 
    # /etc/exports: the access control list for filesystems which may be exported
    #		to NFS clients.  See exports(5).
    #
    # Example for NFSv2 and NFSv3:
    # /srv/homes       hostname1(rw,sync,no_subtree_check) hostname2(ro,sync,no_subtree_check)
    #
    # Example for NFSv4:
    # /srv/nfs4        gss/krb5i(rw,sync,fsid=0,crossmnt,no_subtree_check)
    # /srv/nfs4/homes  gss/krb5i(rw,sync,no_subtree_check)
    ```

* `/home 192.168.0.11(rw,sync,root_squash)`

* Run `exportfs -ra` to reify the changes.

---

## Mount Client

```
mkdir -p /nfs/home/
mount 172.31.40.212:/home /nfs/home/
```

```
sudo systemctl restart nfs-kernel-server
```

```
showmount -e 172.31.40.212
```

```
sudo mount -vvv 172.31.40.212:/var/nfs/general /nfs/general
```

```
telnet 172.31.40.212 2049
```

