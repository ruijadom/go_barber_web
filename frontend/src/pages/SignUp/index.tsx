import React from 'react';
import { FiArrowLeft, FiLogIn, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="Gobarber" />

      <form>
        <h1>Sign Up</h1>

        <Input name="name" icon={FiUser} placeholder="Name" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password "
          icon={FiLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Enter</Button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="">
        <FiArrowLeft />
        Back to Login
      </a>
    </Content>
  </Container>
);

export default Signin;
