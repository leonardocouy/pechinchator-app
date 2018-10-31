import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const ThreadList = ({ threads }) => (
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
      { threads }
    </TableBody>
  </Table>
)

export default ThreadList;
