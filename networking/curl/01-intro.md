# curl

## Introduction

* `curl` is  a  tool  to transfer data from or to a server, using one of the supported protocols

* `curl` curl is powered by `libcurl` for all transfer-related features.

---

## Basic Usage

```bash
curl <options> <url>
```

---

## Command Line Options

* `-o <filename>` - Output to file.

* `-O` - Output to name of resource.

* `-C` - Continue existing partial download.

* `-F file=@<file>` - Upload a file.

* `-L` - Follow redirects.

* `-k` - Disable certificate checking.

* `-v` - View HTTP request header and connection details.

* `-w ` - View HTTP request header and connection details.

* `-s` - Hide the progress bar.

* `-i` -  Include HTTP response headers.

* `-X <http-method>` - Include HTTP response headers.

* `-I` - HEAD method shortcut.

* `-H` -  Set HTTP request headers.

* `-A` - Set `User-Agent` shortcut.

* `-e` - Set `Referrer` shortcut.

* `--data <data>` - Add post data.

* `-d <data>` - Add post data.

* `--data-urlencode` - Add url-encoded data

* `-d @some.json` - Add post data from local file.

* `-f` stores the curl mapped HTTP response code in the `shell exit-code variable`.

* `-u <username>:<passwd>` - Specify `HTTP BAsic Auth` username and password.

* `--sslv3` - Specify the protocol to use. This can be used to check if it is accepted by the server..

* `--resolve` - Specify the virtual host and port of the target.

* `-4` - Use IPv4 addressing.

* `-6` - Use IPv4 addressing.

* `~/.curlrc` - Allows global configuration options to be defined.

* `-K` - Allow an arbitrary configuration file to be set.

---

## References

* [curl - Home](https://curl.haxx.se)

* [Tutorial - Binary Tides](https://www.booleanworld.com/curl-command-tutorial-examples)

* [URL-encoding](https://en.wikipedia.org/wiki/Percent-encoding)