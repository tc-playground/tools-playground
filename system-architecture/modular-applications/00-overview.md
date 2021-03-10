# Modular Applications

* Modular applications based on a multi-process architecture communicating over IPC (unix-domain-sockets).

  * e.g. `Chromium`

This would have some interesting advantages, such as stricter isolation (so for instance an OutOfMemoryError in one deployed application won’t impact others) and re-deployments without any risk of classloader leaks, as the JVM of an deployment would be restarted. On the downside, you’d be facing a higher overall memory consumption (although that can at least partly be mitigated through class data sharing, which also works across JVM boundaries) and more costly (remote) method invocations between deployments.

JEP 380

Now the application server model has fallen out of favour for various reasons, but such multi-process design still is very interesting, for instance for building modular applications that should expose a single web endpoint, while being assembled from a set of processes which are developed and deployed by several, independent teams. Another use case would be desktop applications that are made up of a set of processes for isolation purposes, as it’s e.g. done by most web browsers noawadays with distinct processes for separate tabs. JEP 380 should facilitate this model when creating Java applications, e.g. considering rich clients built with JavaFX.

Another, really interesting feature of Unix domain sockets is the ability to transfer open file descriptors from one process to another. This allows for non-disruptive upgrades of server applications, without dropping any open TCP connections. This technique is used for instance by Envoy Proxy for applying configuration changes: upon a configuration change, a second Envoy instance with the new configuration is started up, takes over the active sockets from the previous instance and after some "draining period" triggers a shutdown of the old instance. This approach enables a truly immutable application design within Envoy itself, with all its advantages, without the need for in-process configuration reloads. I highly recommend to read the two posts linked above, they are super-interesting.

* [Talking to Postgres Through Java 16 Unix-Domain Socket Channels](https://www.morling.dev/blog/talking-to-postgres-through-java-16-unix-domain-socket-channels/)