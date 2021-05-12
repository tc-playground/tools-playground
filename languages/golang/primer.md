# Golang Primer


---

## Install Golang toolchain

* [Install Golang](https://golang.org/doc/install#tarball_non_standard)

---

## Environment Variables

* __GOROOT__

  * `Go` distributions assume the toolchain is installed under: `/usr/local/go` or `c:\Go under Windows`.

  * `GOROOT` can be defined if the toolchain is installed in a different location.

  * [Docs](https://golang.org/doc/manage-install)

* __GOPATH__

  * The GOPATH environment variable lists places to look for Go code. 
  
  * On Unix, the value is a colon-separated string. 
  
  * On Windows, the value is a semicolon-separated string.

  * [Docs](https://golang.org/cmd/go/#hdr-GOPATH_environment_variable)

