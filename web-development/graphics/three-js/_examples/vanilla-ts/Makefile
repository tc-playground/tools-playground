install:
	npm install

build:
	mkdir -p dist/client dist/server
	cp src/client/index.html dist/client/index.html
	node_modules/.bin/tsc -p src/server
	node_modules/.bin/tsc -p src/client

start:
	node ./dist/server/server.js

clean:
	rm -Rf dist
	rm -Rf node_modules