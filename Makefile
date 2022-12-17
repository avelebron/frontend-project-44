install: # копирование пакетов
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: # отладка
	npm publish --dry-run

lint: # запускает линтер
	npx eslint .

brain-even: # запуск Проверки на чётность
	node bin/brain-even.js

brain-calc: # запуск Калькулятора
	node bin/brain-calc.js
