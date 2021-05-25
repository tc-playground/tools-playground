# Map Reduce

* `Map Reduce` help process `ver large datasets`. e.g. summarise large

    * `Map Functions` transforms data on a machine into `key-value pairs`. Idempotent.

    * `Reduce Function` take the out of the map functions and reduces them into the final output. Idempotent.

    * `Shuffle Functions` map reduce operations onto particular nodes.

* __Map Reduce - Characteristics__

    * `Map Reduce` assumes there is a `distributed file-system` ith a `central control-plane`.

    * `Map Reduce` does not want to move the data. The `Map` functions move to the machines and work on data `locally`.

    * `Map Reduce` `key-value pair` structure have commonality related to the task we want to achieve. These are collated on reduce nodes.

    * `Map Reduce` tries to handle failure (idempotent re-tries).

* __Canonical Example__

    * Count every occurrences of some words in a large set of documents.

    * Define: `Map Functions`, `KV Pairs`, `Reduce Functions`.

---

### MapReduce

"MapReduce is a programming model for processing and generating big data sets with a parallel, distributed algorithm on a cluster."


### File System

An abstraction over a storage medium that defines how to manage data. While there exist many different types of file systems, most follow a hierarchical structure that consists of directories and files, like the Unix file system's structure.

### Idempotent Operation

An operation that has the same ultimate outcome regardless of how many times it's performed. If an operation can be performed multiple times without changing its overall effect, it's idempotent. Operations performed through a Pub/Sub messaging system typically have to be idempotent, since Pub/Sub systems tend to allow the same messages to be consumed multiple times.

For example, increasing an integer value in a database is not an idempotent operation, since repeating this operation will not have the same effect as if it had been performed only once. Conversly, setting a value to "COMPLETE" is an idempotent operation, since repeating this operation will always yield the same result: the value will be "COMPLETE".

### MapReduce

A popular framework for processing very large datasets in a distributed setting efficiently, quickly, and in a fault-tolerant manner. A MapReduce job is comprised of 3 main steps:
The canonical example of a MapReduce use case is counting the number of occurrences of words in a large text file.
When dealing with a MapReduce library, engineers and/or systems administrators only need to worry about the map and reduce functions, as well as their inputs and outputs. All other concerns, including the parallelization of tasks and the fault-tolerance of the MapReduce job, are abstracted away and taken care of by the MapReduce implementation.
Distributed File System

A Distributed File System is an abstraction over a (usually large) cluster of machines that allows them to act like one large file system. The two most popular implementations of a DFS are the Google File System (GFS) and the Hadoop Distributed File System (HDFS).

Typically, DFSs take care of the classic availability and replication guarantees that can be tricky to obtain in a distributed-system setting. The overarching idea is that files are split into chunks of a certain size (4MB or 64MB, for instance), and those chunks are sharded across a large cluster of machines. A central control plane is in charge of deciding where each chunk resides, routing reads to the right nodes, and handling communication between machines.
Different DFS implementations have slightly different APIs and semantics, but they achieve the same common goal: extremely large-scale persistent storage.

### Hadoop

A popular, open-source framework that supports MapReduce jobs and many other kinds of data-processing pipelines. Its central component is HDFS (Hadoop Distributed File System), on top of which other technologies have been developed.
