import React, { useCallback, useState, useMemo, ChangeEvent } from 'react';
import { Form } from '@unform/web';

import { Container, UploadContainer, FormContainer } from './styles';
import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';
import Input from '../../components/Input';

const New: React.FC = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = useCallback((data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  const handleShowThumbnail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('thumbnail', e.target.files[0]);

        // set api call herex
      }
    },
    [],
  );

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <Container>
      <img src={logo} alt="Air cnc logo" />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <UploadContainer
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
          >
            <input type="file" onChange={handleShowThumbnail} />
            <img src={camera} alt="Camera Icon" />
          </UploadContainer>

          <label>EMPRESA *</label>
          <Input name="company" placeholder="Sua empresa incrível" />

          <label>TECNOLOGIAS *</label>
          <Input name="tecs" placeholder="Sua empresa incrível" />

          <label>VALOR DA DIÁRIA *</label>
          <Input name="price" placeholder="Sua empresa incrível" />

          <button type="submit">Cadastrar</button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default New;
