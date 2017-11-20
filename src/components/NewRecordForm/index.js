import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import { addTitleAction } from '../../actions/title';
import './style.css';

class NewRecordForm extends React.Component {
  state = {
    name: '',
    score: 0,
    type: 'movie',
    dialogOpen: false,
  };

  handleClick = () => {
    const { name, score, type } = this.state;
    this.props.addTitle({
      name,
      score,
      type,
    });
    this.setState({
      dialogOpen: true,
    });
  };

  handleInputChange = (e, val) => {
    const { name } = e.currentTarget;
    let value = val;
    if (name === 'score' && value) {
      value = parseInt(value, 10);
    }
    this.setState({
      [name]: value,
    });
  };

  handleDialogClose = () => {
    this.setState({
      name: '',
      score: 0,
      type: 'movie',
      dialogOpen: false,
    });
  };

  render() {
    const {
      name, score, type, dialogOpen
    } = this.state;

    const actions = [
      <FlatButton label="Ok" primary onClick={this.handleDialogClose} />,
    ];
    return (
      <div className="container form">
        <Paper className="paper">
          <RadioButtonGroup
            name="type"
            defaultSelected={type}
            onChange={this.handleInputChange}
          >
            <RadioButton
              value="movie"
              label="Movie"
              style={{ display: 'inline-block', width: '150px' }}
            />
            <RadioButton
              value="tv-series"
              label="TV-Series"
              style={{ display: 'inline-block', width: '150px' }}
            />
          </RadioButtonGroup>
          <div>
            <TextField
              floatingLabelText="Movie / Tv-Series Name"
              value={name}
              name="name"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <TextField
              floatingLabelText="Score"
              value={score}
              name="score"
              type="number"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <RaisedButton label="Save" primary onClick={this.handleClick} />
          </div>
        </Paper>
        <Dialog
          title="Saved Successfully"
          actions={actions}
          modal
          open={dialogOpen}
        >
          Your {type} record has been saved successfully.
        </Dialog>
      </div>
    );
  }
}

NewRecordForm.propTypes = {
  addTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addTitle: (title) => dispatch(addTitleAction(title)),
});

export default connect(null, mapDispatchToProps)(NewRecordForm);
