import { createSelector } from 'reselect';

const mainViewSelector = (state) => state.getIn(['main', 'view']);
const removeTitleIdSelector = (state) => state.getIn(['main', 'removeTitleId']);
const removeTitleNameSelector = (state) =>
  state.getIn(['main', 'removeTitleName']);
const makeViewData = () => createSelector(mainViewSelector, (state) => state);

export { makeViewData, removeTitleIdSelector, removeTitleNameSelector };
