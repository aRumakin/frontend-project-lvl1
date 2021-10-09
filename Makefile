#Makefile

install:
	npm ci

run:
	bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
