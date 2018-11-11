import React, { Component } from 'react';
import { threadsRef } from "../config/firebase";
import ThreadList from '../components/ThreadList';

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
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

  componentDidMount() {
    threadsRef
      .orderBy("updated_at", "desc")
      .orderBy("posted_at", "desc")
      .onSnapshot(snapshot => {
        const threads = snapshot.docs.map((threadDoc) => {
          return { id: threadDoc.id, ...threadDoc.data() };
        });

        this.setState({ threads });
      });
  }

  render() {
    const { threads, rowsPerPage, page } = this.state;

    return (
      <ThreadList
        threads={threads}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }
}

export default ThreadsContainer
