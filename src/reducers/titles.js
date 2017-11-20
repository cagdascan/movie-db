import { fromJS } from 'immutable';
import {
  ADD_TITLE,
  REMOVE_TITLE_CONFIRM,
  INCREASE_SCORE,
  DECREASE_SCORE,
} from '../constants';

const initialState = fromJS({
  list: localStorage.getItem('titles')
    ? JSON.parse(localStorage.getItem('titles'))
    : [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE: {
      const list = state.get('list').toJS();
      list.push(action.payload);
      localStorage.setItem('titles', JSON.stringify(list));
      return state.set('list', fromJS(list));
    }

    case REMOVE_TITLE_CONFIRM: {
      const list = state.get('list').toJS();
      const index = list.findIndex((i) => i.id === action.payload.id);
      const newList = state.get('list').remove(index);
      localStorage.setItem('titles', JSON.stringify(newList));
      return state.set('list', fromJS(newList));
    }

    case INCREASE_SCORE: {
      const list = state.get('list').toJS();
      const index = list.findIndex((i) => i.id === action.payload.id);
      const newList = state.get('list').update(index, (i) => {
        const item = i.toJS();
        const { score } = item;
        item.score = score + 1;
        return fromJS(item);
      });
      localStorage.setItem('titles', JSON.stringify(newList));

      return state.set('list', newList);
    }

    case DECREASE_SCORE: {
      const list = state.get('list').toJS();
      const index = list.findIndex((i) => i.id === action.payload.id);
      const newList = state.get('list').update(index, (i) => {
        const item = i.toJS();
        const { score } = item;
        if (score > 0) {
          item.score = score - 1;
        }
        return fromJS(item);
      });
      localStorage.setItem('titles', JSON.stringify(newList));

      return state.set('list', newList);
    }

    default:
      return state;
  }
};
