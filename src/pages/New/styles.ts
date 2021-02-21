import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadContainer = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }
`;

export const FormContainer = styled.form`
  margin-top: 30px;

  form {
    background: #fff;
    padding: 25px 25px;
    border-radius: 8px;

    input {
      margin-bottom: 8px;
      width: 400px;
    }

    label {
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      margin-top: 8px;
      height: 45px;
      border: none;
      background: #d24542;
      border-radius: 4px;
      width: 400px;
      margin-left: auto;
      color: #ffff;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: #7150c1;
      }
  }
`;
