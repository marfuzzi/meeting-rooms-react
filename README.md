**Проект пока полностью не готов. Работа будет окончена в ближайшие 3 дня. Прошу, по возможности, подождать с проверкой этого задания.**

Cервис бронирования переговорок.

Решение тестового задания №3 шестой [Школы разработки интерфейсов](https://academy.yandex.ru/events/frontend/shri_msk-2018).

**Запуск**

```
npm i

npm start
```
Проект должен запуститися по адресу  http://localhost:5000

Чтобы запустить graphql server нужно в новом окне терминала запустить

```nodemon server/index.js```

Для обновления данных:
```
cd server
rm db.sqlite3
node create-mock-data.js
```

**Технологии**
* React
* Redux
* Appolo Graphql

**Библиотеки**
* moment
* lodash
