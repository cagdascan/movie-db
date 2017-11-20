import { createSelector } from 'reselect';

const titlesSelector = (state) => state.getIn(['titles', 'list']).toJS();
const sortingSelector = (state) => state.getIn(['main', 'sort']);
const filterSelector = (state) => state.getIn(['main', 'filter']).toJS();

const filteredTitlesSelector = createSelector(
  [titlesSelector, filterSelector],
  (titles, filter) =>
    [].concat([], ...filter.map((i) => titles.filter((j) => j.type === i))),
);

const sortedTitlesSelector = createSelector(
  filteredTitlesSelector,
  sortingSelector,
  (titles, sort) => {
    if (sort === 'descending') {
      return titles.sort((a, b) => a.score < b.score);
    }
    return titles.sort((a, b) => a.score > b.score);
  },
);

export { sortingSelector, sortedTitlesSelector, filterSelector };
