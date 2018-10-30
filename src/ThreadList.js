import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const ThreadList = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Promoção</TableCell>
        <TableCell>Origem</TableCell>
        <TableCell>Postado em</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          Valmarte - 10L Sabão Líquido Omo Multiacão Poder Acelerador - R$55,97 (Frete Free)
        </TableCell>
        <TableCell>Hardmob</TableCell>
        <TableCell>29/10/2018 18:30</TableCell>
        <TableCell>HOT!</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          [PepsiCo] Compre 1 biscoito Toddy e ganhe R$10.00 em créditos no celular
        </TableCell>
        <TableCell>Hardmob</TableCell>
        <TableCell>29/10/2018 12:30</TableCell>
        <TableCell>HOT!</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default ThreadList;
