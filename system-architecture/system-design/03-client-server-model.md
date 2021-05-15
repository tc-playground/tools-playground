# Client Server Model


A client is a thing that talks to servers. A server is a thing that talks to clients. The client—server model is a thing made up of a bunch of clients and servers talking to one another.

And that, kids, is how the Internet works!

### Client

A machine or process that requests data or service from a server.

> Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

### Server

A machine or process that provides data or service for a client, usually by listening for incoming network calls.

> Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

### Client—Server Model

The paradigm by which modern systems are designed, which consists of `clients requesting data or service from servers` and `servers providing data or service to clients`.

### IP Address

An address given to each machine connected to the public internet. IPv4 addresses consist of four numbers separated by dots: a.b.c.d where all four numbers are between 0 and 255. Special values include:

### Port

In order for multiple programs to listen for new network connections on the same machine without colliding, they pick a port to listen on. A port is an integer between 0 and 65,535 (216 ports total).

Typically, ports 0-1023 are reserved for system ports (also called well-known ports) and shouldn't be used by user-level processes. Certain ports have pre-defined uses, and although you usually won't be required to have them memorized, they can sometimes come in handy. Below are some examples:

### DNS

Short for `Domain Name System`, it describes the entities and protocols involved in the translation from domain names to IP Addresses. Typically, machines make a DNS query to a well known entity which is responsible for returning the IP address (or multiple ones) of the requested domain name in the response.
