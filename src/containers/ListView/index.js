import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { FileCreateNewFolder } from 'material-ui/svg-icons';
import MovieList from '../../components/MovieList';
import {
  switchViewAction,
  switchSortingAction,
  changeFilterAction,
} from '../../actions/main';
import { sortingSelector, filterSelector } from '../../selectors/titles';
import './style.css';

const ListView = ({
  sort,
  filter,
  switchView,
  switchSorting,
  changeFilter,
}) => (
  <div>
    <AppBar showMenuIconButton={false} className="app-bar">
      <div>
        <SelectField
          floatingLabelText="Filter By"
          multiple
          hintText="Select category"
          value={filter}
          onChange={(e, idx, value) => changeFilter(value)}
          style={{ marginRight: '40px' }}
        >
          <MenuItem
            insetChildren
            checked={filter && filter.indexOf('movie') > -1}
            value="movie"
            primaryText="Movies"
          />
          <MenuItem
            insetChildren
            checked={filter && filter.indexOf('tv-series') > -1}
            value="tv-series"
            primaryText="TV-Series"
          />
        </SelectField>
        <SelectField
          floatingLabelText="Sort By"
          value={sort}
          onChange={(e, idx, value) => switchSorting(value)}
        >
          <MenuItem value="descending" primaryText="Score (Descending)" />
          <MenuItem value="ascending" primaryText="Score (Ascending)" />
        </SelectField>
      </div>
      <RaisedButton
        label="New"
        icon={<FileCreateNewFolder />}
        onClick={() => {
          switchView('new-record');
        }}
      />
    </AppBar>
    <MovieList />
  </div>
);

ListView.propTypes = {
  sort: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired,
  switchView: PropTypes.func.isRequired,
  switchSorting: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sort: sortingSelector,
  filter: filterSelector,
});

const mapDispatchToProps = (dispatch) => ({
  switchView: (view) => dispatch(switchViewAction(view)),
  switchSorting: (sort) => dispatch(switchSortingAction(sort)),
  changeFilter: (filter) => dispatch(changeFilterAction(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
