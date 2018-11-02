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
    threadsRef.onSnapshot(snapshot => {
      const threads = snapshot.docs.map((threadDoc) => threadDoc.data());

      this.setState({ threads });
    });

  }

  render() {
    const { threads } = this.state;

    return <ThreadList threads={threads} />;
  }
}

export default ThreadsContainer
