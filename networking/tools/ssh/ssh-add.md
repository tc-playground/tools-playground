# ssh-add

## Add PKI key-pair to ssh-agent

```bash
eval `ssh-agent`
ssh-add $HOME/.ssh/<private-key>
```

## Remove PKI key-pair from ssh-agent

```
ssh-add -d $HOME/.ssh/<private-key>
```