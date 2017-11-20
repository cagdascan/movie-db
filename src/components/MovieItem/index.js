import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import {
  ActionDeleteForever,
  NavigationArrowDropUp,
  NavigationArrowDropDown,
  ActionStars,
} from 'material-ui/svg-icons';
import { increaseScoreAction, descreaseScoreAction } from '../../actions/title';
import { removeTitleAction } from '../../actions/main';
import './style.css';

const MovieItem = ({
  id,
  name,
  score,
  increaseScore,
  decreaseScore,
  removeTitle,
}) => (
  <TableRow>
    <TableRowColumn className="center-row">
      <span>{name}</span>
      <IconButton
        onClick={() => {
          removeTitle(id, name);
        }}
      >
        <ActionDeleteForever />
      </IconButton>
    </TableRowColumn>
    <TableRowColumn className="center-row">
      {score}
      <ActionStars />
    </TableRowColumn>
    <TableRowColumn>
      <IconButton
        onClick={() => {
          decreaseScore(id);
        }}
      >
        <NavigationArrowDropDown />
      </IconButton>
      <IconButton
        onClick={() => {
          increaseScore(id);
        }}
      >
        <NavigationArrowDropUp />
      </IconButton>
    </TableRowColumn>
  </TableRow>
);

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  decreaseScore: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  removeTitle: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  increaseScore: (id) => dispatch(increaseScoreAction(id)),
  decreaseScore: (id) => dispatch(descreaseScoreAction(id)),
  removeTitle: (id, name) => dispatch(removeTitleAction(id, name)),
});

export default connect(null, mapDispatchToProps)(MovieItem);
