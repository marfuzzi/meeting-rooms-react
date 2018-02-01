## Проект пока полностью не готов. Работа будет окончена в ближайшие 3 дня. Прошу, по возможности, подождать с проверкой третьего задания. ##

Cервис бронирования переговорок.

Решение тестового задания №3 шестой [Школы разработки интерфейсов](https://academy.yandex.ru/events/frontend/shri_msk-2018).

## Запуск

### Production
```
npm i
npm run build
npm run start-prod
```

Открываем по адресу http://localhost:5050

### Development

#### Запуск приложения
```npm run start```
Приложение запустится по адресу http://localhost:5000

#### Запуск graphql server'а
1. открываем новое окно терминала
2. Обновляем данные:
```
cd server
rm -f db.sqlite3
node create-mock-data.js
```
3. Запускаем сервер:
```
nodemon server/index.js
```
Слушаем сервер на http://localhost:5050

**Технологии**
* React
* Redux
* Appolo Graphql

**Библиотеки**
* moment
* lodash
