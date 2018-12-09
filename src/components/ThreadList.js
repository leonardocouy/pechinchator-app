import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ThreadListItem from '../components/ThreadListItem';
import { Table, TableHead, TableBody, TableRow, TableFooter, TableCell, Paper, TablePagination,  TextField } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  underline: {
    '&:before': {
      borderBottom: `2px solid ${grey[400]}`,
    },
    '&:after': {
        borderBottom: `2px solid ${green[400]}`
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: `2px solid ${green[400]}`
    }


  }
});
const ThreadList = ({ threads, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, handleSearch, selectThread, classes }) => {
  const placeholderRows  = rowsPerPage - Math.min(rowsPerPage, threads.length - page * rowsPerPage);
  const paginatedThreads = threads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <TextField
                InputProps={{
                  classes: { underline: classes.underline },
                }}
                style={{ marginTop: 20, marginBottom: 20 }}
                placeholder="Pesquise pela palavra-chave do produto que você tá procurando. Exemplo: Smartphone"
                fullWidth
                margin="normal"
                onChange={handleSearch}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Promoção</TableCell>
            <TableCell>Postado</TableCell>
            <TableCell>Atualizado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedThreads.map((thread) =>
            <ThreadListItem
              key={thread.id}
              thread={thread}
              selectThread={selectThread} />
          )}
          {placeholderRows > 0 && (
            <TableRow style={{ height: 48 * placeholderRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={6}
              count={threads.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  )
};

ThreadList.propTypes = {
  threads: PropTypes.array,
};

ThreadList.defaultProps = {
  threads: [],
};


export default withStyles(styles)(ThreadList);
