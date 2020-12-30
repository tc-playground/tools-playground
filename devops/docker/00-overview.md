# Docker

* The Docker daemon was explicitly designed to have exclusive access to `/var/lib/docker`. 

    * Nothing else should touch, poke, or tickle any of the Docker files hidden there.

    * Make concurrency easier.

* `docker` containers should generally have one main process:

    * You can connect multiple containers using `user-defined networks` and `shared volumes`.

---

## References

* [Docker Development - YouTube](https://www.youtube.com/playlist?list=PLHq1uqvAteVvqQaaIAvfIWWTL_JmmXcfg)

* [Docker Development - GitHub](https://github.com/marcel-dempers/docker-development-youtube-series)