import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  margin-top: 45px;

  form {
    display: flex;
    flex-direction: column;
    background: #ffff;
    padding: 45px 45px;
    border-radius: 8px;

    span {
      color: #333;
      line-height: 24px;
      font-size: 16px;
    }

    label {
      margin-top: 10px;
      color: #333;
      font-weight: bold;
      font-size: 13px;
    }

    button {
      margin-top: 15px;
      height: 35px;
      border: none;
      background: #d24542;
      border-radius: 4px;
      width: 150px;
      margin-left: auto;
      color: #ffff;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.1, '#d24542')};
      }
    }
  }
`;
