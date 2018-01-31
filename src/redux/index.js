import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers';
import history from '../history'

let rooms = [
    {
        "id": "1",
        "name": "Ржавый Фред",
        "capacity": "3-6 человек",
        "meeting": [
            {
                "id": "1",
                "start": "1515735000000",
                "end": "1515735900000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "2",
                "start": 1515735000000,
                "end": 1515735900000,
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "3",
                "start": "1515738600000",
                "end": "1515745800000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            }
        ]
    },
    {
        "id": "2", "name": "Прачечная", "capacity": "до 10 человек",
        "meeting": [
            {
                "id": "1",
                "start": "1515735000000",
                "end": "1515735000000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "2",
                "start": "1515735000000",
                "end": "1515735000000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "3",
                "start": "1515735000000",
                "end": "1515735000000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            }
        ]
    },
    {
        "id": "3", "name": "Желтый дом", "capacity": "до 10 человек",
        "meeting": [
            {
                "id": "1",
                "start": "1515735000000",
                "end": "15157000000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "2",
                "start": "1515735000000",
                "end": "1515735000000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "3",
                "start": "1515821400000",
                "end": "1515822300000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            }
        ]
    },
    {
        "id": "4", "name": "Оранжевый Тюльпан", "capacity": "до 10 человек",
        "meeting": [
            {
                "id": "1",
                "start": "1515997800000",
                "end": "1515997800000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "2",
                "start": "1515997800000",
                "end": "1515997800000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            },
            {
                "id": "3",
                "start": "1515997800000",
                "end": "1515997800000",
                "theme": "Lalalala",
                "members": [
                    {
                        "id": "1",
                        "name": "Петя"
                    },
                    {
                        "id": "2",
                        "name": "Вася"
                    },
                    {
                        "id": "3",
                        "name": "Аня"
                    },
                ],
            }
        ]
    }
]

const initial_state = {
    rooms: {
        list: rooms
    },
}

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    initial_state,
    composeEnhancers(applyMiddleware(middleware))
);

export default store;
