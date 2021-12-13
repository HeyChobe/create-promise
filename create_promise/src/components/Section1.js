import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background-color: white;
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
    line-height: 60px;
    border-right: 5px solid #00AA2E;
    padding-right: 5%;
  }

  p{
    padding: 0;
    font-size: 40px;
    margin-left: 5%;
    font-weight: 300;
  }
`;

function Section1() {
  return (
    <Wrapper>
      <Container>
        <h2>Help the ONG of your choice</h2>
        <p>
          By creating a fitness promise, you place a certain amount of money and
          a time limit of your promise. If you do not comply and so you prefer,
          you can choose between ONG to donate your money.
        </p>
      </Container>
    </Wrapper>
  );
}

export default Section1;
