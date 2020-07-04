import React from 'react';
import styled from 'styled-components';
import harold from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo.png';
import {TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Card, CardContent} from '@material-ui/core';
const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: flex-start;
  padding-top: 100px;

`
const AvatarContainer = styled.div`
  padding: 0 0 50px 0;
  height: 300px;
  width: 300px;
`
const Avatar = styled.img`
  height: 100%;
`
const Logo = styled.img`
  height: 100%;
`

const LoginContainer = styled.div`

`
const LoginForm = styled.form`
  display:grid;
`
const StyledButton = styled(Button)`

`
const StyledLink = styled(Link)`
  margin-top: 20px !important;
  text-decoration: none;
  display: grid;
  grid-template-columns: 70% auto;
  justify-content: space-between;
`

function Login() {
  return (
    <Container>

      <Card>
        <CardContent>
        <AvatarContainer>
        <Avatar src={harold}></Avatar>
      </AvatarContainer>
      <LoginContainer>
        <LoginForm>
          <TextField label="Username" />
          <TextField label="Password" type="password"/>
        </LoginForm>
        <StyledLink to="/dashboard">
          <StyledButton variant="contained" >
            Continue to Aller
          </StyledButton>
          <Logo src={logo}></Logo>
        </StyledLink>

      </LoginContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
