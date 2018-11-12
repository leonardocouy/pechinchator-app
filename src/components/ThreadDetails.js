
import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import styled from 'styled-components';
import { Dialog, DialogTitle, DialogContent, IconButton, Tooltip } from '@material-ui/core';

const StyledDialog = styled(Dialog)`
  .container {
    width: 600px;
    height: 500px;
  }
`

const DialogTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center

  .thread-title-container {
    flex: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .thread-title {
    flex: auto;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .thread-title-btn {
    margin-left: 8px;
  }
`

const ThreadDetailsContent = styled.div`
  blockquote {
    margin: 0;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 50%;
  }

  img ~ img {
    margin-top: 12px;
  }
`

const ThreadDetails = ({ thread, open, handleClose }) => {
  const threadContent = () => ({ __html: thread.content_html });

  return (
    <StyledDialog classes={{paper: 'container'}} open={open} onClose={handleClose}>
      <DialogTitle>
        <DialogTitleContent>
          <div className="thread-title-container">
            <span className="thread-title">
              {thread.title}
            </span>
            <Tooltip title="Abrir o link original da postagem em uma nova aba">
              <IconButton className="thread-title-btn"
                onClick={() => window.open(thread.url)}>
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </div>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitleContent>
      </DialogTitle>
      <DialogContent>
        <ThreadDetailsContent dangerouslySetInnerHTML={threadContent()} />
      </DialogContent>
    </StyledDialog>
  )}

ThreadDetails.propTypes = {
  thread: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

ThreadDetails.defaultProps = {
  open: false,
};

export default ThreadDetails;
