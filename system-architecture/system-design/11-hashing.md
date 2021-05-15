# Hashing

* `Hashing` is an action to transform an arbitrary piece of data into a fixed size (integer) value.

    * e.g. `ip`, `request`, `user_ident`, etc.

    * Good hashing functions evenly distribute data values.

* __Loadbalancer Hashing__

    * Server local caching with fronted by a round robin load balancer will not be performant when servers are added and removed

    * __Modular Hashing__

        * `Hash` the client `name` and route all requests to the same server (hash modulo of the number of servers).

        * How to deal with lost servers, or adding new servers? 
        
        * If we change the mod, servers might be renumbered and a lot of caches misses will occur.
        
        * `Consistent hashing` and `Rendezvous hashing` can be used to resolve this.

    * __Consistent Hashing__

        * Hash servers and client and place them on a circular ring of numbers.

        * Clients are routed to the first server on the right. (Buckets).

        * A server can be place on the ring multiple times (e.g. more powerful servers).
    
    * __Rendezvous Hashing__

        * For each `client` uses a function to `rank the servers` for itself and selects the highest `ranked server`.

        * Loop over the severs and `computeScore` for each `{client, server}` pair and pick the highest.

            * e.g. `(userNameHash * 13 + serverHash * 11) % 67`



    





---

## Hashing

### Hashing Function

A function that takes in a specific data type (such as a string or an identifier) and outputs a number. Different inputs may have the same output, but a good hashing function attempts to minimize those hashing collisions (which is equivalent to maximizing uniformity).

### Load Balancer

A type of reverse proxy that distributes traffic across servers. Load balancers can be found in many parts of a system, from the DNS layer all the way to the database layer.

### Consistent Hashing

A type of hashing that minimizes the number of keys that need to be remapped when a hash table gets resized. It's often used by load balancers to distribute traffic to servers; it minimizes the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down.

### Rendezvous Hashing

A type of hashing also coined highest random weight hashing. Allows for minimal re-distribution of mappings when a server goes down.

### SHA

Short for "Secure Hash Algorithms", the SHA is a collection of cryptographic hash functions used in the industry. These days, SHA-3 is a popular choice to use in a system.