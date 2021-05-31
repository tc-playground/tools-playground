# Protocol Buffers Primer

## Install ProtoBuf Compiler

1. Download the latest version of [protoc](https://github.com/protocolbuffers/protobuf/releases) for the target system.

    ```bash
    $ wget https://github.com/protocolbuffers/protobuf/releases/download/v3.16.0/protoc-3.9.0-osx-x86_64.zip
    $ unzip protoc-3.9.0-osx-x86_64.zip -d /usr/local/protobuf
    ```

    ```bash
    $ wget https://github.com/protocolbuffers/protobuf/releases/download/v3.16.0/protoc-3.16.0-linux-x86_64.zip
    $ unzip protoc-3.16.0-linux-x86_64.zip -d /usr/local/protobuf
    $ sudo chmod -R +xr /usr/local/protobuf
    $ # Update .bash_profile 
    $ # [ -d "/usr/local/protobuf/bin" ] && export PATH=$PATH:/usr/local/protobuf/bin
    ```

    ```bash
    sudo apt install protobuf-compiler
    sudo apt install golang-goprotobuf-dev
    ```

    ```bash
    go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
    echo 'export GOPATH=$HOME/Go' >> $HOME/.bashrc
    source $HOME/.bashrc
    echo 'export PATH=$PATH:$GOPATH/bin' >> $HOME/.bashrc
    source $HOME/.bashrc
    ```


---

## Resources

* [Protocol Buffer - Home](https://developers.google.com/protocol-buffers)

* [Protocol Buffers - Releases](https://github.com/protocolbuffers/protobuf/releases)
