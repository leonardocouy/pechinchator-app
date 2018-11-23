import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleTagManager from "./components/GoogleTagManager";
import Main from './views/Main';

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
    let adsbygoogle;
    return (
      <div>
        <CssBaseline/>
        <Navbar  />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default withStyles(styles)(App);
