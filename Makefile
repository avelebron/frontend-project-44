install: # копирование пакетов
	npm ci

link: # установка пакета
	npm link

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

brain-gcd: # запуск НОД
	node bin/brain-gcd.js

brain-progression: # запуск Арифметической прогресси
	node bin/brain-progression.js

brain-prime: # запуск Простое ли число?
	node bin/brain-prime.js
