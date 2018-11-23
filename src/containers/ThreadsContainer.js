import React, { Component, Fragment } from 'react';
import { threadsRef } from "../config/firebase";
import ThreadList from '../components/ThreadList';
import ThreadDetails from '../components/ThreadDetails';
import dayjs from 'dayjs';

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      selectedThread: {},
      showDetails: false,
      page: 0,
      rowsPerPage: 25,
    };
  }

  handleChangePage = (_event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClose = () => this.setState({ showDetails: false });

  selectThread(key) {
    const thread = this.state.threads.find((thread) => thread.id === key);

    this.setState({ selectedThread: thread, showDetails: true });
  }

  componentDidMount() {
    threadsRef
      .where("updated_at", ">=", dayjs().subtract(1, 'days').toDate())
      .orderBy("updated_at", "desc")
      .orderBy("posted_at", "desc")
      .get()
      .then(snapshot => {
        const threads = snapshot.docs.map((threadDoc) => {
          return { id: threadDoc.id, ...threadDoc.data() };
        });

        this.setState({ threads });
      });
  }

  render() {
    const { threads, selectedThread, rowsPerPage, page, showDetails } = this.state;

    return (
      <Fragment>
        <ThreadList
          threads={threads}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={this.handleChangePage}
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          selectThread={this.selectThread.bind(this)}
        />
        <ThreadDetails
          thread={selectedThread}
          open={showDetails}
          handleClose={this.handleClose}
        />
      </Fragment>
    );
  }
}

export default ThreadsContainer
