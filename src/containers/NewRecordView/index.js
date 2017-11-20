import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { NavigationChevronLeft } from 'material-ui/svg-icons';
import { switchViewAction } from '../../actions/main';
import NewRecordForm from '../../components/NewRecordForm';
import './style.css';

const NewRecordView = ({ switchView }) => (
  <div>
    <AppBar showMenuIconButton={false} className="app-bar">
      <RaisedButton
        label="Back"
        icon={<NavigationChevronLeft />}
        onClick={() => {
          switchView('list');
        }}
      />
    </AppBar>
    <NewRecordForm />
  </div>
);

NewRecordView.propTypes = {
  switchView: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  switchView: (view) => dispatch(switchViewAction(view)),
});

export default connect(null, mapDispatchToProps)(NewRecordView);
