import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Navbar from "./Navbar";
import ThreadList from './ThreadList';

const styles = theme => ({
  appBar:{
    backgroundColor: Green[500],
    flex: '0 1 auto',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    return (
      <div>
        <CssBaseline/>
        <Navbar  />
        <ThreadList />
      </div>
    );
  }
}

export default withStyles(styles)(App);
