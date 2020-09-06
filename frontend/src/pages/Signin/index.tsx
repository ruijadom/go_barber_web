import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Login</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Password" />

        <button type="submit">Enter</button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="">
        <FiLogIn />
        Create account
      </a>
    </Content>

    <Background />
  </Container>
);

export default Signin;
