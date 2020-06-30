

## Port Forwarding

```bash
ssh \
  -R/var/run/mysql.sock:/var/run/mysql.sock \
  -R127.0.0.1:3306:/var/run/mysql.sock \
  somehost
```

---

## References

* [Socket Port Forwarding](https://serverfault.com/questions/127794/forward-local-port-or-socket-file-to-remote-socket-file)

* [Proxy Jump](https://link.medium.com/cf64AK36n7) - SSH configuration to automatically set up connections through multiple hosts.