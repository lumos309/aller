import React from 'react';
import ReactDOM from 'react-dom';
import Root from './screens';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import SideMenu from './common/sidemenu';
import { GlobalStoreProvider} from 'global-store-hook';

// NOTE: (d.x.pereirayip@gmail.com) feel free to modify the background color here for the theme
const Container = styled.div`
  width: 100vw;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  & .canvasjs-chart-credit{
    display: none;
  }
`
const init = {
  confidenceDialog: false,
  itineraryDialog: false,
}
ReactDOM.render(
  <GlobalStoreProvider initValues={init}>
    <BrowserRouter>
      <Container>
      <SideMenu/>
        <Root />
      </Container>
    </BrowserRouter>
  </GlobalStoreProvider>,
  document.getElementById('root')
);

