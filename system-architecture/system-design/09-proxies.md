# Proxies

## Forward Proxy

* Proxy for clients.

* Sits between the client and the target server.

* Proxy that acts on behalf of the clients.

* Forward the request to the server.

* Can hide the identity of the client. The source IP address is that of the proxy not the client. e.g. VPN.

    * Can be used to access content with restrictions.

## Reverse Proxy

* Proxy for servers.

* Proxy that acts on behalf of the servers.

* Can hide the identity of the actual server(s) handling the request and returning the response.

* e.g. If configured correctly DNS can be used to return the IP address of the proxy instead of the actual server.

* Reverse Proxies can be used for lots of things:

    1. Filtering out requests.
    2. Log incoming requests into the system.
    3. Cache static data.
    4. Load balancer traffic over several servers. Round-robin, by path, etc.
    5. DDoS mitigation.
    


---

## Proxies

Often used by nefarious hackers to conceal their identity and obfuscate their location, these special intermediary servers boast many important real-life applications within the context of caching, access control, and censorship bypassing, amongst other things.

## Client

A machine or process that requests data or service from a server.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

## Server

A machine or process that provides data or service for a client, usually by listening for incoming network calls.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

## Forward Proxy

A server that sits between a client and servers and acts on behalf of the client, typically used to mask the client's identity (IP address). Note that forward proxies are often referred to as just proxies.

## Reverse Proxy

A server that sits between clients and servers and acts on behalf of the servers, typically used for logging, load balancing, or caching.

## Nginx

Pronounced "engine X"—not "N jinx", Nginx is a very popular webserver that's often used as a reverse proxy and load balancer.