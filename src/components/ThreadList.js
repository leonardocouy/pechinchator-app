import React from 'react';
import PropTypes from 'prop-types';
import ThreadListItem from '../components/ThreadListItem';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const ThreadList = ({ threads }) => {
  return (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Promoção</TableCell>
        <TableCell>Origem</TableCell>
        <TableCell>Postado em</TableCell>
        <TableCell>Respostas</TableCell>
        <TableCell>Visitas</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {threads.map((thread) => <ThreadListItem key={thread.id} thread={thread} />)}
    </TableBody>
  </Table>
)}

ThreadList.propTypes = {
  threads: PropTypes.array,
};

ThreadList.defaultProps = {
  threads: [],
};


export default ThreadList;
