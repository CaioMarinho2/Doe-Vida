import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    width: 299px;
    height: 59px;
    top: 79px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 59px;
    color: #591c21;
    text-align: center;
  }

  h2 {
    width: 96px;
    height: 41px;
    left: 112px;
    top: 138px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    color: #034140;
  }

  form {
    width: 264px;
    height: 459px;
    left: 28px;
    top: 204px;
    background: #591c21;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    left: 80px;
    top: 22px;
    text-align: center;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 41.6928px;
    line-height: 57px;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px;
  }

  label {
    width: 46px;
    height: 22px;
    font-family: "Nunito";
    font-style: normal;
    font-size: 18px;
    color: #ffffff;
  }

  input {
    width: 222px;
    height: 29px;
    left: 21px;
    top: 160px;
    background: #fefffb;
    border-radius: 15px;
    padding-left: 20px;
  }

  button,
  .voltar {
    width: 222px;
    height: 39px;
    left: 21px;
    top: 324px;
    margin-left: 20px;
    background: #034140;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 21.9941px;
    line-height: 30px;
    color: #ffffff;
    border-radius: 7px;

    transition: 0.3s;
    &:hover {
      background: #046967;
    }
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #ffffff;
    text-align: center;

    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .voltar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .voltar:hover {
    text-decoration: none;
  }

  @media (min-width: 480px) {
    form {
      width: 531px;
      height: 509px;
      left: 535px;
      background: #591c21;
      border-radius: 6px;
      margin-top: 20px;
    }

    h1 {
      font-size: 43px;
    }

    p {
      margin-top: 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-left: 100px;
    }

    input {
      width: 347px;
      height: 40px;
      left: 92px;
      top: 171px;
      background: #fefffb;
      padding-left: 20px;
    }

    button,
    .voltar {
      margin-left: 150px;
    }

    span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 10px;
      color: #ffffff;
    }
  }
`;
