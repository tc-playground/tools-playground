# Manaul Invocation

* __Inside Container__ - `curl --unix-socket wobble -X POST localhost/call -d '{ "name": "Tim" }' ; echo`

* __Outside Container__ - `curl -X POST localhost:1234/call -d '{ "name": "Functions Team" }' ; echo`

* __localhost__ - `curl -X POST localhost:1234/call -d '{ "name": "Functions Team" }' ; echo`
