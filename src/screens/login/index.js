import React from 'react';
import styled from 'styled-components';
import harold from '../../assets/images/avatar.png';
import {TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: flex-start;

`
const AvatarContainer = styled.div`
  padding: 100px 0 50px 0;
  height: 300px;
  width: 300px;
`
const Avatar = styled.img`
  height: 100%;
`

const LoginContainer = styled.div`

`
const LoginForm = styled.form`

`
const StyledButton = styled(Button)`
  margin-top: 20px !important;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

function Login() {
  return (
    <Container>
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
            Login
          </StyledButton>
        </StyledLink>

      </LoginContainer>
    </Container>
  );
}

export default Login;
