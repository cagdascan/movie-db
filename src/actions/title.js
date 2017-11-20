import uuidv1 from 'uuid/v1';
import {
  ADD_TITLE,
  INCREASE_SCORE,
  DECREASE_SCORE,
  REMOVE_TITLE_CONFIRM,
} from '../constants';

const addTitleAction = ({
  id = uuidv1(), name, type, score = 0
}) => ({
  type: ADD_TITLE,
  payload: {
    id,
    name,
    score,
    type,
  },
});

const removeTitleConfirmAction = (id) => ({
  type: REMOVE_TITLE_CONFIRM,
  payload: {
    id,
  },
});

const increaseScoreAction = (id) => ({
  type: INCREASE_SCORE,
  payload: {
    id,
  },
});

const descreaseScoreAction = (id) => ({
  type: DECREASE_SCORE,
  payload: {
    id,
  },
});

export {
  addTitleAction,
  removeTitleConfirmAction,
  increaseScoreAction,
  descreaseScoreAction,
};
