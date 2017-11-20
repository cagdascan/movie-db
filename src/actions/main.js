import {
  SWITCH_VIEW,
  SWITCH_SORTING,
  CHANGE_FILTER,
  REMOVE_TITLE,
  REMOVE_TITLE_CANCEL,
} from '../constants';

const switchViewAction = (view) => ({
  type: SWITCH_VIEW,
  payload: {
    view,
  },
});

const switchSortingAction = (sort) => ({
  type: SWITCH_SORTING,
  payload: {
    sort,
  },
});

const changeFilterAction = (filter) => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

const removeTitleAction = (id, name) => ({
  type: REMOVE_TITLE,
  payload: {
    id,
    name,
  },
});

const removeTitleCancelAction = () => ({
  type: REMOVE_TITLE_CANCEL,
  payload: {},
});

export {
  switchViewAction,
  switchSortingAction,
  changeFilterAction,
  removeTitleAction,
  removeTitleCancelAction,
};
