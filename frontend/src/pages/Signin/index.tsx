import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Login</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password "
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Enter</Button>

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
