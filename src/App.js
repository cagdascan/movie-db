import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeViewData } from './selectors/main';
import ListView from './containers/ListView';
import NewRecordView from './containers/NewRecordView';

import './App.css';

const App = ({ view }) => (
  <MuiThemeProvider>
    {view === 'list' ? <ListView /> : <NewRecordView />}
  </MuiThemeProvider>
);

App.propTypes = {
  view: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: makeViewData(),
});

export default connect(mapStateToProps)(App);
