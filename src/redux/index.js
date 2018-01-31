import { routerMiddleware } from 'react-router-redux';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import moment from 'moment';
import history from '../history'

const initialState = {
  currentDate: Number(moment(new Date()).startOf('day'))
};

const setDateReducer = (state = initialState.currentDate, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return action.payload;
    case 'INCREASE_DATE':
      return moment(state).add(1,'day').valueOf();
    case 'DECREASE_DATE':
      return moment(state).subtract(1,'day').valueOf();
    default:
      return state
  }
};

const reducers = combineReducers({
  selectedDate: setDateReducer
});

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(middleware))
);

export default store;
