#Makefile

install: 
	install-deps

run:
	bin/brain-games.js

install-deps:
	npm ci --dry-run

publish:
	npm publish --dry-run

lint:
	npx eslint .
