import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { Container, FormContainer } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

const Home: React.FC = () => {
  const handleSubmit = useCallback((data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <Container>
      <img src={logo} alt="Logo aircnc" />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <span>
            Ofereça <b>spots</b> para programadores e <br />
            encontre <b>talentos</b> para sua empresa
          </span>

          <label>E-MAIL*</label>
          <Input name="email" placeholder="Seu melhor e-mail" />

          <button type="submit">Cadastrar</button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Home;
