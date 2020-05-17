# DNS Protocol

## Introduction

* An `Authoritative DNS server` is one that is responsible for hosting the primary records in a `domain`.

    * An `authoritative DNS servers` is a database that managed and serves a set of `DNS records`.

    * There may be multiple `authoritative DNS servers` for a domain. Typically one will be the `master`.

    * A `zone transfer` can be used to move DNS records.

* A `Recursive DNS server` is one that is responsible for serving cached DNS records.