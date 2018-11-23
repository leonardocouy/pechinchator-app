import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleTagManager from "./components/GoogleTagManager";
import Main from './views/Main';
import AdBanner from './components/AdBanner';

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
        <Main />
        <Footer />
        <GoogleTagManager gtmId={process.env.REACT_APP_GOOGLE_TGM_KEY} />
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
          { (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: process.env.REACT_APP_GOOGLE_ADS_KEY,
            enable_page_level_ads: true
          }) };
        </script>
      </div>
    );
  }
}

export default withStyles(styles)(App);
