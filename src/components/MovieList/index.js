import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {
  removeTitleIdSelector,
  removeTitleNameSelector,
} from '../../selectors/main';
import { sortedTitlesSelector } from '../../selectors/titles';
import { removeTitleConfirmAction } from '../../actions/title';
import { removeTitleCancelAction } from '../../actions/main';
import MovieItem from '../MovieItem';
import './style.css';

const MovieList = ({
  titles,
  removeTitleId,
  removeTitleName,
  removeTitleConfirm,
  removeTitleCancel,
}) => {
  const actions = [
    <FlatButton label="Cancel" secondary onClick={() => removeTitleCancel()} />,
    <FlatButton
      label="Ok"
      primary
      onClick={() => {
        removeTitleConfirm(removeTitleId);
        removeTitleCancel();
      }}
    />,
  ];
  return (
    <div className="container record-table">
      <Paper>
        <Table>
          <TableBody displayRowCheckbox={false}>
            {titles.length ? (
              titles.map((title) => <MovieItem key={title.id} {...title} />)
            ) : (
              <TableRow>
                <TableRowColumn className="center-row">
                  <h3>No Record Found</h3>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      <Dialog title="Delete" actions={actions} modal open={!!removeTitleId}>
        Are you sure you want to delete {removeTitleName} ?
      </Dialog>
    </div>
  );
};

MovieList.propTypes = {
  titles: PropTypes.array.isRequired,
  removeTitleId: PropTypes.string.isRequired,
  removeTitleName: PropTypes.string.isRequired,
  removeTitleConfirm: PropTypes.func.isRequired,
  removeTitleCancel: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  removeTitleId: removeTitleIdSelector,
  removeTitleName: removeTitleNameSelector,
  titles: sortedTitlesSelector,
});

const mapDispatchToProps = (dispatch) => ({
  removeTitleConfirm: (id) => dispatch(removeTitleConfirmAction(id)),
  removeTitleCancel: () => dispatch(removeTitleCancelAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
