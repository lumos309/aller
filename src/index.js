import React from 'react';
import ReactDOM from 'react-dom';
import Root from './screens';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// NOTE: (d.x.pereirayip@gmail.com) feel free to modify the background color here for the theme
const Container = styled.div`
  background: #fffff;
  height: 100vh;
  width: 100vw;
`

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Root />
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);

