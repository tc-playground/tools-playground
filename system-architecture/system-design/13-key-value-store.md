# Key Value Store

## Overview

* A `key-value store` bases its data model on the associative array data type.

* Does not define a specific set of relationships on the data.

* Can be harder to query in a generic way.

* Good for specific tasks. e.g. `caching`.

* Good for where data only needs to be returned. e.g. `blog messages`.

* Many different variants: `persistent`, `in-memory`, `consistent`, `eventually-consistent`, etc.

    * `redis`, `memcached`, `dynamodb`, etc.

---

## Key-Value Stores

One of the most commonly used NoSQL paradigms today, the key-value store bases its data model on the associative array data type.

The result? A fast, flexible storage machine that resembles a hash table. That's right folks, our favorite friendly neighborhood data structure strikes again!

## Relational Database

A type of structured database in which data is stored following a tabular format; often supports powerful querying using SQL.


## Non-Relational Database

In contrast with relational database (SQL databases), a type of database that is free of imposed, tabular-like structure. Non-relational databases are often referred to as NoSQL databases.


## Key-Value Store

A Key-Value Store is a flexible NoSQL database that's often used for caching and dynamic configuration. Popular options include DynamoDB, Etcd, Redis, and ZooKeeper.

## Etcd

Etcd is a strongly consistent and highly available key-value store that's often used to implement leader election in a system.

## Redis

An in-memory key-value store. Does offer some persistent storage options but is typically used as a really fast, best-effort caching solution. Redis is also often used to implement rate limiting.

## ZooKeeper

ZooKeeper is a strongly consistent, highly available key-value store. It's often used to store important configuration or to perform leader election.