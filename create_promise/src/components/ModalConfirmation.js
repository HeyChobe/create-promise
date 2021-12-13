import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  background-color: #00000070;
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 190px;
  background-color: white;
`;

const MarginContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 30px;

    p{
      font-weight: 500;
      font-size: 22px;
      margin: 0;
      padding-bottom: 10px;
    }

    i {
      cursor: pointer;
      font-size: 22px;
      padding-bottom: 10px;

      &:hover {
        color: #ff5555;
      }
    }
  }

  button {
    height: 50px;
    border: 0;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .remove {
      background-color: black;
    }

    .donate {
      background-color: #00aa2e;
    }
  }
`;

function ModalConfirmation({action, id}) {
  
  const onClickButton = async () => {
    const response = await fetch(
      `/api/v1/promise/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    );
    const responseJSON = await response.json();
    if (!responseJSON) {
      alert("Ha ocurrido un error");
    } else {
      if (responseJSON.error) {
        console.log(responseJSON.error);
        alert("Ha ocurrido un error");
      } else {
        alert("Promesa eliminada con éxito");
        action(true)
      }
    }
  };

  const onCloseModal = () => {
    action(false)
  }
  
  return (
    <ModalWrapper>
      <Container>
        <MarginContainer>
          <div className="header">
            <p>Do you complete the promise?</p>
            <i onClick={onCloseModal} className="fas fa-times"></i>
          </div>
          <div className="buttons">
            <button onClick={onClickButton} className="remove">Withdraw my money</button>
            <button onClick={onClickButton} className="donate">Donate my money</button>
          </div>
        </MarginContainer>
      </Container>
    </ModalWrapper>
  );
}

export default ModalConfirmation;
