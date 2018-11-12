import React from 'react';
import styled from 'styled-components';
import ThreadsContainer from '../containers/ThreadsContainer';

const MainContainer = styled.main`
  margin-bottom: 64px;
`

const Main = () => (
  <MainContainer>
    <ThreadsContainer />
  </MainContainer>
)

export default Main;
