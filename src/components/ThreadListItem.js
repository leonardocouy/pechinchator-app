import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { TableRow, TableCell } from '@material-ui/core';

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
`
const ThreadUrl = styled.span`
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
    <StyledTableRow onClick={() => { selectThread(thread.id) }}>
      <TableCell>
        <ThreadUrl>
          { thread.title }
        </ThreadUrl>
      </TableCell>
      <TableCell>{ thread.source_id }</TableCell>
      <TableCell>{ formatDate(thread.posted_at.toDate()) }</TableCell>
      <TableCell>{ formatDate(thread.updated_at.toDate()) }</TableCell>
      <TableCell>{ thread.replies_count }</TableCell>
      <TableCell>{ thread.visits_count }</TableCell>
  </StyledTableRow>
  )
}

export default ThreadListItem;
