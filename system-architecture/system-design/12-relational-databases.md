# Relational Databases

## Overview

* Properties, Guarantees, Specialisation

* Relational Databases - Imposes a tabular structure on the data.

    * SQL - Structured Query Language.

* Non-Relation Databases - Do no impose tabular structures.

* __ACID Transactions__

    * __Atomicity__ - Mulitple sub-operations either all succeed or all fail. e.g. Transfer funds.

    * __Consistency__ - No stale data between transaction. Data follows defined rules and constraints.

    * __Isolation__ - Transactions. Multiple transactions can execute at the same time, but, look as if they are done sequentially.

        * Transactional operations are queued. Concurrent, but, effectively applied sequentially.
        
        e.g. If multiple transactions occur at the same time, the latter ones will 'hang' till the previous are committed.



    * __Durability__ - When a change is made the database, the effects are permanent. e.g. stored on disk.

* __Database Indexes__

    * An additional data structure to index into a particular column or set of columns in a table.

    * e.g. Ordered set of values pointing to the associated records.

    * Prevent the need for sequential searches.

    * Speed up read operations, but, takes up at space, and, will make write operations slower (as the index need to be updated).

* __Transactions__

    * Demark `multiple operation`s into a single `atomic operation`. 
    
        e.g. BEGIN transaction, perform ops, COMMIT transaction.





---

### Databases

Databases are programs that either use disk or memory to do 2 core things: record data and query data. In general, they are themselves servers that are long lived and interact with the rest of your application through network calls, with protocols on top of TCP or even HTTP.

Some databases only keep records in memory, and the users of such databases are aware of the fact that those records may be lost forever if the machine or process dies.

For the most part though, databases need persistence of those records, and thus cannot use memory. This means that you have to write your data to disk. Anything written to disk will remain through power loss or network partitions, so that’s what is used to keep permanent records.

Since machines die often in a large scale system, special disk partitions or volumes are used by the database processes, and those volumes can get recovered even if the machine were to go down permanently.

### Disk
Usually refers to either HDD (hard-disk drive) or SSD (solid-state drive). Data written to disk will persist through power failures and general machine crashes. Disk is also referred to as non-volatile storage.
SSD is far faster than HDD (see latencies of accessing data from SSD and HDD) but also far more expensive from a financial point of view. Because of that, HDD will typically be used for data that's rarely accessed or updated, but that's stored for a long time, and SSD will be used for data that's frequently accessed and updated.

### Memory

Short for Random Access Memory (RAM). Data stored in memory will be lost when the process that has written that data dies.

### Relational Database

A type of structured database in which data is stored following a tabular format; often supports powerful querying using SQL.

### Non-Relational Database

In contrast with relational database (SQL databases), a type of database that is free of imposed, tabular-like structure. Non-relational databases are often referred to as NoSQL databases.

## SQL
Structured Query Language. Relational databases can be used using a derivative of SQL such as PostgreSQL in the case of Postgres.

## SQL Database
Any database that supports SQL. This term is often used synonymously with "Relational Database", though in practice, not every relational database supports SQL.

## NoSQL Database
Any database that is not SQL-compatible is called NoSQL.

## ACID Transaction
A type of database transaction that has four important properties:

## Database Index

A special auxiliary data structure that allows your database to perform certain queries much faster. Indexes can typically only exist to reference structured data, like data stored in relational databases. In practice, you create an index on one or multiple columns in your database to greatly speed up read queries that you run very often, with the downside of slightly longer writes to your database, since writes have to also take place in the relevant index.

## Strong Consistency
Strong Consistency usually refers to the consistency of ACID transactions, as opposed to Eventual Consistency.

## Eventual Consistency

A consistency model which is unlike Strong Consistency. In this model, reads might return a view of the system that is stale. An eventually consistent datastore will give guarantees that the state of the database will eventually reflect writes within a time period (could be 10 seconds, or minutes).

## Postgres

A relational database that uses a dialect of SQL called PostgreSQL. Provides ACID transactions.
