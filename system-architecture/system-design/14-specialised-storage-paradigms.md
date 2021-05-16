# Specialised Storage Paradigms

* There are various specialised databases.

* __BLOB (Binary Large Object) Store__

    > Optimised for storing large amounts of unstructured data.
    
    * Arbitrary piece of unstructured data: `images`, `videos`, `audio`, `binary data`, etc.

    * Often large and unstructured.

    * e.g. `S3`, `Google Cloud Storage (GCS)`, etc.

    * Behave like `key-value stores`, but, optimised differently.

* __Time Series Database__

    > Optimised for storing time based data.

    * Time based data `event monitoring`, `telemetry`, `IoT`, `stock prices`, `crypto currency prices`.

    * e.g. `InfluxDB`, `Prometheus`.

* __Graph Databases__

    > Optimised for data that contains lots of different relationships between entities.

    * Build on top of the `graph data model`.

    * `Web pages`, `Social Networks`, etc.

    * e.g. `Neo4j (Cipher Query Language)`.

* __Spatial Database__

    > Optimised for spatial data. 

    * Built on top of a `Quad Tree` spatial index. Lots of types.

        * `Quad Trees` have `4` or `0` child nodes. 

        * `Quad Trees` define a `grid` with resolution.

        * `Quad Trees` stop dividing at defined set of `entries`. 
        
        * `Quad Tree` give fast look-up `log4n`. More indexes for denser data regions. 

    * `Geo-locations`, `Google Maps`, etc.



---

## Specialized Storage Paradigms


### Relational Database

A type of structured database in which data is stored following a tabular format; often supports powerful querying using SQL.

### Non-Relational Database

In contrast with relational database (SQL databases), a type of database that is free of imposed, tabular-like structure. Non-relational databases are often referred to as NoSQL databases.

### SQL

Structured Query Language. Relational databases can be used using a derivative of SQL such as PostgreSQL in the case of Postgres.

### SQL Database

Any database that supports SQL. This term is often used synonymously with "Relational Database", though in practice, not every relational database supports SQL.

#### NoSQL Database

Any database that is not SQL-compatible is called NoSQL.

### Key-Value Store

A Key-Value Store is a flexible NoSQL database that's often used for caching and dynamic configuration. Popular options include DynamoDB, Etcd, Redis, and ZooKeeper.

### Database Index

A special auxiliary data structure that allows your database to perform certain queries much faster. Indexes can typically only exist to reference structured data, like data stored in relational databases. In practice, you create an index on one or multiple columns in your database to greatly speed up read queries that you run very often, with the downside of slightly longer writes to your database, since writes have to also take place in the relevant index.

### Postgres

A relational database that uses a dialect of SQL called PostgreSQL. Provides ACID transactions.

### Blob Storage

Widely used kind of storage, in small and large scale systems. They don’t really count as databases per se, partially because they only allow the user to store and retrieve data based on the name of the blob. This is sort of like a key-value store but usually blob stores have different guarantees. They might be slower than KV stores but values can be megabytes large (or sometimes gigabytes large). Usually people use this to store things like large binaries, database snapshots, or images and other static assets that a website might have.
Blob storage is rather complicated to have on premise, and only giant companies like Google and Amazon have infrastructure that supports it. So usually in the context of System Design interviews you can assume that you will be able to use GCS or S3. These are blob storage services hosted by Google and Amazon respectively, that cost money depending on how much storage you use and how often you store and retrieve blobs from that storage.

### Time Series Database

A TSDB is a special kind of database optimized for storing and analyzing time-indexed data: data points that specifically occur at a given moment in time. Examples of TSDBs are InfluxDB, Prometheus, and Graphite.

### Graph Database

A type of database that stores data following the graph data model. Data entries in a graph database can have explicitly defined relationships, much like nodes in a graph can have edges.

Graph databases take advantage of their underlying graph structure to perform complex queries on deeply connected data very fast.

Graph databases are thus often preferred to relational databases when dealing with systems where data points naturally form a graph and have multiple levels of relationships—for example, social networks.

### Cypher

A graph query language that was originally developed for the Neo4j graph database, but that has since been standardized to be used with other graph databases in an effort to make it the "SQL for graphs."
Cypher queries are often much simpler than their SQL counterparts. Example Cypher query to find data in Neo4j, a popular graph database:

### Spatial Database

A type of database optimized for storing and querying spatial data like locations on a map. Spatial databases rely on spatial indexes like quadtrees to quickly perform spatial queries like finding all locations in the vicinity of a region.

### Quadtree

A tree data structure most commonly used to index two-dimensional spatial data. Each node in a quadtree has either zero children nodes (and is therefore a leaf node) or exactly four children nodes.

Typically, quadtree nodes contain some form of spatial data—for example, locations on a map—with a maximum capacity of some specified number n. So long as nodes aren't at capacity, they remain leaf nodes; once they reach capacity, they're given four children nodes, and their data entries are split across the four children nodes.

A quadtree lends itself well to storing spatial data because it can be represented as a grid filled with rectangles that are recursively subdivided into four sub-rectangles, where each quadtree node is represented by a rectangle and each rectangle represents a spatial region. Assuming we're storing locations in the world, we can imagine a quadtree with a maximum node-capacity n as follows:
Finding a given location in a perfect quadtree is an extremely fast operation that runs in log4(x) time (where x is the total number of locations), since quadtree nodes have four children nodes.

### Google Cloud Storage

GCS is a blob storage service provided by Google.

### S3

S3 is a blob storage service provided by Amazon through Amazon Web Services (AWS).

### InfluxDB

A popular open-source time series database.

### Prometheus

A popular open-source time series database, typically used for monitoring purposes.

### Neo4j

A popular graph database that consists of nodes, relationships, properties, and labels.
