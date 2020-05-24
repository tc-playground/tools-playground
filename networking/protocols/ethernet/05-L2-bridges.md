# L1 Bridges

## Introduction

1. `Bridges` are `L2` devices. 

    1. They allow `logical partitioning` of a network split a large `collision domain` into multiple smaller `collision domains`.

    2. They do not create multiple `broadcast domains`.

    > NB: They can also conversely also be viewed as way to join multiple physical networks to create a larger `broadcast domain`.

2. `Bridges` were introduced to overcome the limitation of `hubs` and their associated large `collision` and `broadcast` domains.

    1. `Bridges` are placed between `hubs` to create smaller `collision` and `broadcast` domains.

        ```
            Host A1 <--.                                          .--> Host B1
                        \                                        /
                        +---> Hub A ---> Bridge <--- Hub B <---+
                        /                                        \
            Host An <--`                                          `--> Host Bn

            <==  Collision Domain A  ==>           <==  Collision Domain B  ==>             
        ```

3. `Bridges` create smaller `collision domains`. This results in few collision.

4. `Bridges` do not create smaller `broadcast domains`.

> `Switches` help create smaller `broadcast domains`.

