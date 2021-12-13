import React from "react";
import styled from "styled-components";
import img from "../img/coverpage.jpeg";

const CoverWrapper = styled.section`
  height: 90vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    color: white;
    padding: 0;
    margin:0;
    width: 400px;
    height: auto;
    line-height: 80px;
    margin-left: 5%;
    font-size: 70px;
    border-bottom: 5px solid #00AA2E;
  }

  p{
    color: white;
    padding: 0;
    font-size: 40px;
    margin-left: 5%;
    font-weight: 300;
  }
`;

function CoverPage() {
  return (
    <CoverWrapper>
      <h1>MAKE YOURSELF A PROMISE</h1>
      <p>
        Invest in yourself, create a fitness promise for a certain time and
        deposit an amount of money as a guarantee of your progress.
      </p>
    </CoverWrapper>
  );
}

export default CoverPage;
