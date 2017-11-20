import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
  SWITCH_SORTING,
  CHANGE_FILTER,
  REMOVE_TITLE,
  REMOVE_TITLE_CANCEL,
} from '../constants';

const initialState = fromJS({
  view: 'list',
  sort: 'descending',
  filter: ['movie', 'tv-series'],
  removeTitleId: '',
  removeTitleName: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return state.set('view', action.payload.view);
    case SWITCH_SORTING:
      return state.set('sort', action.payload.sort);
    case CHANGE_FILTER:
      return state.set('filter', fromJS(action.payload.filter));
    case REMOVE_TITLE:
      return state
        .set('removeTitleId', action.payload.id)
        .set('removeTitleName', action.payload.name);
    case REMOVE_TITLE_CANCEL:
      return state.set('removeTitleId', '').set('removeTitleName', '');
    default:
      return state;
  }
};
