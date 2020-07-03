import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: grid;
  justify-content: center;

`
const Dashboard = () => {
    return (
        <Container>
            <h1>Hello dashboard</h1>
            <Link to="/itinerary">Go to Itinerary</Link>
        </Container>
      );
}

export default Dashboard;