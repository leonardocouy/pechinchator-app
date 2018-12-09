import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import styled from 'styled-components';

const StyledFooter = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;
  }

  .disclaimer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Footer = () => (
  <StyledFooter position="static" style={{ backgroundColor: green[400] }}>
    <Toolbar className="disclaimer">
      <Typography variant="subtitle1" color="inherit">
        As promoções postadas não são publicadas pelo o <strong>Pechinchator</strong>, as promoções são coletadas de diversas fontes de promoções.
      </Typography>
    </Toolbar>
  </StyledFooter>
)

export default Footer;
