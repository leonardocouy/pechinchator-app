import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const Navbar = ({ classes }) => (
  <React.Fragment>
    <AppBar style={{ backgroundColor: green[400] }} position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          pechinchator.
        </Typography>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)

export default Navbar;
