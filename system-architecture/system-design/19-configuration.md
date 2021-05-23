# Configuration

* `static configuration` - Packaged with and deployed with the code. Slow.

    * Deployed. Reviewed.

    * Immutable.

* `dynamic configuration` - Sever from some datastore. Fast.

    * Quick to change. UI.

    * Flexible.

    * __Safety__ - Tooling, ACL, Review, etc.

---

The config file is like the genome of a computer application; it stores parameters that define your system's critical settings, much like your DNA stores the genes that define your physical characteristics.

Unlike its biological counterpart though, the config file is easily editable. No gene therapy needed!

## JSON

A file format heavily used in APIs and configuration. Stands for JavaScript Object Notation. Example:

## YAML

A file format mostly used in configuration. Example:

## Key-Value Store

A Key-Value Store is a flexible NoSQL database that's often used for caching and dynamic configuration. Popular options include DynamoDB, Etcd, Redis, and ZooKeeper.

## Configuration

A set of parameters or constants that are critical to a system. Configuration is typically written in JSON or YAML and can be either static, meaning that it's hard-coded in and shipped with your system's application code (like frontend code, for instance), or dynamic, meaning that it lives outside of your system's application code.
