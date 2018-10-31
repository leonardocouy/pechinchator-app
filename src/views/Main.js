import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThreads } from '../actions';
import ThreadList from '../components/ThreadList';
import ThreadListItem from '../components/ThreadListItem';

class Main extends Component {
  renderThreadListItems() {
    const { data } = this.props;

    if(!data.length) return;

    return data.map((thread, i) => <ThreadListItem key={i} thread={thread} />)
  }

  componentWillMount() {
    this.props.fetchThreads();
  }

  render() {
    return (
      <main className="main-container">
        <ThreadList threads={this.renderThreadListItems()} />
      </main>
    )
  }
}


const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, { fetchThreads })(Main);
