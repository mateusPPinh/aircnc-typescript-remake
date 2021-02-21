import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  margin-top: 25px;
`;

export const Content = styled.div`
  background: #fff;
  padding: 25px 25px;
  border-radius: 8px;

  span {
    color: #333;
    font-size: 14px;
    line-height: 21px;
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;

    button + button {
      margin-left: 10px;
    }

    .accept {
      border: 0;
      background: none;
      font-weight: bold;
      color: #bcf285;
      text-transform: uppercase;
    }

    .denied {
      border: 0;
      background: none;
      font-weight: bold;
      color: #d24542;
      text-transform: uppercase;
    }
  }

  .texts {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .add__spot {
    width: 100%;
    margin-top: 20px;
    height: 40px;
    border: 0;
    background: #d24542;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: #9448bc;
    }
  }
`;

export const ImagesContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    border-radius: 4px;

    margin: 0 7px;
  }

  strong {
    margin-right: auto;
    margin-top: 10px;
    margin-left: 7px;
    font-size: 18px;
    color: #333;
  }

  p {
    margin-right: auto;
    margin-left: 7px;
    margin-top: 6px;
    font-size: 13px;
    color: #aaa;
    font-weight: bold;
  }
`;
