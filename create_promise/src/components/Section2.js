import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background-color: black;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 60px;
    text-align: center;
    color: #00aa2e;
    line-height: 60px;
    border-left: 5px solid white;
    padding-left: 5%;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: auto;
    margin-right: 5%;

    p {
      padding: 0;
      font-size: 40px;
      color: white;
      font-weight: 300;
      text-align: right;
    }

    button {
        border: 0;
        background-color: white;
        height: 50px;
        width: 200px;
        font-size: 20px;
    }
  }
`;

function Section2() {
  return (
    <Wrapper>
      <Container>
        <div className="left">
          <p>
            This project is thought to improve your physical health and mental,
            while you can also help a cause.
          </p>
          <button>Create Promise</button>
        </div>
        <h2>You win, everyone win</h2>
      </Container>
    </Wrapper>
  );
}

export default Section2;
