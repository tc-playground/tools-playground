# Networking

## Network Protocols

IP packets. TCP headers. HTTP requests.

## Client
A machine or process that requests data or service from a server.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

## Server
A machine or process that provides data or service for a client, usually by listening for incoming network calls.
Note that a single machine or piece of software can be both a client and a server at the same time. For instance, a single machine could act as a server for end users and as a client for a database.

---

## IP

Stands for Internet Protocol. This network protocol outlines how almost all machine-to-machine communications should happen in the world. Other protocols like TCP, UDP and HTTP are built on top of IP.

## IP Address

An address given to each machine connected to the public internet. IPv4 addresses consist of four numbers separated by dots: a.b.c.d where all four numbers are between 0 and 255. Special values include:

## IP Packet

Sometimes more broadly referred to as just a (network) packet, an IP packet is effectively the smallest unit used to describe data being sent over IP, aside from bytes. An IP packet consists of:

---

## TCP

Network protocol built on top of the Internet Protocol (IP). Allows for ordered, reliable data delivery between machines over the public internet by creating a connection.
TCP is usually implemented in the kernel, which exposes sockets to applications that they can use to stream data through an open connection.

---

## UDP

---

## HTTP

The HyperText Transfer Protocol is a very common network protocol implemented on top of TCP. Clients make HTTP requests, and servers respond with a response.

Requests typically have the following schema:

Responses typically have the following schema:


