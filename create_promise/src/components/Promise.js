import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  height: auto;
  border: 1px solid #00aa2e;
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;

  .margin {
    margin: 10px;

    p {
      padding: 0;
      margin: 0;
    }

    .top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .detail {
      width: 100%;
      text-align: justify;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 10px;
    }

    .donate {
      width: 100%;
      text-align: left;
      font-size: 15px;
      font-weight: 100;
    }
  }
`;

function Promise({action, number, date, description, donation, ong, id}) {
  
  const onClickCard = () => {
    action(id)
  }

  return (
    <Wrapper onClick={onClickCard}>
        <div className="margin">
          <div className="top">
            <p className="promise">Promise #{number}</p>
            <p className="date">{date}</p>
          </div>
          <p className="detail">{description}</p>
          <p className="donate">`${donation} to ${ong}`</p>
        </div>
    </Wrapper>
  );
}

export default Promise;
