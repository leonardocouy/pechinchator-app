import React from 'react';
import dayjs from 'dayjs';
import { TableRow, TableCell } from '@material-ui/core';

const ThreadList = ({ thread }) => (
  <TableRow>
    <TableCell>
      <a href={thread.url} target="_blank" rel="noopener noreferrer">{ thread.title }</a>
    </TableCell>
    <TableCell>{ thread.source_id }</TableCell>
    <TableCell>{ dayjs(thread.posted_at.toDate()).format("DD/MM/YYYY HH:mm")}</TableCell>
    <TableCell>
      {
        thread.updated_at ?
        dayjs(thread.updated_at.toDate()).format("DD/MM/YYYY HH:mm") :
        "-"
      }
    </TableCell>
    <TableCell>{ thread.replies_count }</TableCell>
    <TableCell>{ thread.visits_count }</TableCell>
</TableRow>
)

export default ThreadList;
