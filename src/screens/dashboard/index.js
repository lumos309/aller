import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

`
const Dashboard = () => {
    return (
        <Container>
            <h1>Hello dashboard</h1>
        </Container>
      );
}

export default Dashboard;