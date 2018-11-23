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
      filteredThreads: [],
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

  handleSearch = (event) => {
    if(!event.target.value) this.setState({ filteredThreads: this.threads });

    const threads = this.state.threads.filter((thread) =>
      thread.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredThreads: threads });
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

      this.setState({ threads, filteredThreads: threads });
    });
  }

  render() {
    const { filteredThreads, selectedThread, rowsPerPage, page, showDetails } = this.state;

    return (
      <Fragment>
        <ThreadList
          threads={filteredThreads}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={this.handleChangePage}
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          handleSearch={this.handleSearch.bind(this)}
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
