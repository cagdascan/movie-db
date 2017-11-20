import { combineReducers } from 'redux-immutable';

import mainReducer from './reducers/main';
import titlesReducer from './reducers/titles';

const createReducer = () =>
  combineReducers({
    main: mainReducer,
    titles: titlesReducer,
  });

export default createReducer;
