import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { TableRow, TableCell } from '@material-ui/core';

const ThreadUrl = styled.a`
  color: #66BB6A;
  font-weight: 500;
  text-decoration: none;


  &:hover {
    color: #FFCA28;
  }
`

const ThreadListItem = ({ thread, selectThread }) => {
  const formatDate = (date) => dayjs(date).fromNow();

  return (
    <TableRow onClick={() => { selectThread(thread.id) }}>
      <TableCell>
        <ThreadUrl href={ thread.url } target="_blank" rel="noopener noreferrer">
          { thread.title }
        </ThreadUrl>
      </TableCell>
      <TableCell>{ thread.source_id }</TableCell>
      <TableCell>{ formatDate(thread.posted_at.toDate()) }</TableCell>
      <TableCell>{ formatDate(thread.updated_at.toDate()) }</TableCell>
      <TableCell>{ thread.replies_count }</TableCell>
      <TableCell>{ thread.visits_count }</TableCell>
  </TableRow>
  )
}

export default ThreadListItem;
