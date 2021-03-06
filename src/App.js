import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from './views/Main';

const styles = theme => ({
  appBar:{
    backgroundColor: Green[500],
    flex: '0 1 auto',
  },
  mainContainer: {
    minWidth: 700,
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainContainer}>
        <CssBaseline/>
        <Navbar  />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
