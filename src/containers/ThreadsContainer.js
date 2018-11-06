import React, { Component } from 'react';
import { threadsRef } from "../config/firebase";
import ThreadList from '../components/ThreadList';

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
    };
  }

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
    const { threads } = this.state;

    return <ThreadList threads={threads} />;
  }
}

export default ThreadsContainer
