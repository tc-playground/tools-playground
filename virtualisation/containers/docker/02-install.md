# Docker Installation

## Ubuntu

``` bash
# Docker
sudo apt remove docker docker-engine docker.io
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce
```

3. Configure User Groups

```bash
# Configure the following groups for your user
sudo usermod -aG docker `whoami`
```

---

## References

* [Get Docker](https://docs.docker.com/get-docker)

* [Ubuntu - Official](https://docs.docker.com/engine/install/ubuntu)
