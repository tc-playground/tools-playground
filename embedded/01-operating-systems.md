# Operating System

## Software Flows

1. __Busy Wait Systems__

    * Simple. Just blocks whilst waiting for events.

2. __Multi-Threaded Systems - ISR (Interrupt Service Routines)__

    * One `fore-ground thread` the `main` thread.

    * Mulitple `background threads` - the ISR (Interrupt Service Routines) for each service.

3. __Realtime Systems__

    * Derive the result within the set time constraint.

    * Muliple `foreground` and `background` threads.

    * `Foreground threads` communicate.

    * Thread scheduling.


