import React from 'react';

import { Container, Card, Content, ImagesContainer } from './styles';
import logo from '../../assets/logo.svg';
import background from '../../assets/background.jpg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="AirCnc logo" />

      <Card>
        <Content>
          <span>
            <b>Diego Fernandes</b> está solicitando uma reserva em{' '}
            <b>Rocketseat</b> <br />
            para a data: <b>23 de Março</b>
          </span>

          <div>
            <button type="button" className="accept">
              Aceitar
            </button>
            <button type="button" className="denied">
              Rejeitar
            </button>
          </div>

          <div className="texts">
            <ImagesContainer>
              <img src={background} alt="Spots for sale" />
              <strong>Rocketseat</strong>
              <p>R$ 54,54/dia</p>
            </ImagesContainer>

            <ImagesContainer>
              <img src={background} alt="Spots for sale" />
              <strong>Rocketseat</strong>
              <p>R$ 54,54/dia</p>
            </ImagesContainer>
          </div>

          <button className="add__spot" type="button">
            Cadastrar novo spot
          </button>
        </Content>
      </Card>
    </Container>
  );
};

export default Dashboard;
