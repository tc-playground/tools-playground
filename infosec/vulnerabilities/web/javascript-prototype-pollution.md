# JavaScript Prototype Pollution

## Introduction

* `Prototype pollution` is a vulnerability found in `prototype-based programming languages` such as `JavaScript`.

* `Prototype pollution` allows attackers to manipulate the behavior of an application by modifying its code at runtime.

* `Prototype pollution` vulnerabilities are usually exploited through malicious `user input`.

    * `form input`

    * `url` by appending query parameters.

* `Prototype pollution` and can lead to a host of attacks, including `denial of service`, and `even remote code execution (RCE)`.

* `Prototype pollution` is mitigated by `sanitising input when parsing it` - user input, urls, etc.

---

## References

* [Prototype Pollution](https://portswigger.net/daily-swig/prototype-pollution-vulnerability-left-bug-bounty-platform-hackerone-open-to-attack)