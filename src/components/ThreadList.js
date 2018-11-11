import React from 'react';
import PropTypes from 'prop-types';
import ThreadListItem from '../components/ThreadListItem';
import { Table, TableHead, TableBody, TableRow, TableFooter, TableCell, Paper, TablePagination } from '@material-ui/core';

const ThreadList = ({ threads, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, selectThread }) => {
  const placeholderRows  = rowsPerPage - Math.min(rowsPerPage, threads.length - page * rowsPerPage);
  const paginatedThreads = threads.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Promoção</TableCell>
            <TableCell>Origem</TableCell>
            <TableCell>Postado em</TableCell>
            <TableCell>Atualizado em</TableCell>
            <TableCell>Respostas</TableCell>
            <TableCell>Visitas</TableCell>
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
              <TableCell colSpan={6} />
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


export default ThreadList;
