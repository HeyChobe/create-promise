import React from "react";
import styled from "styled-components";
import img from "../img/createpromise.jpeg";

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .info {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 50%;
    height: 550px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 15px;

    h3 {
      margin-left: 20px;
      color: white;
      font-size: 50px;
      width: 300px;

      span {
        color: #00aa2e;
      }
    }
  }

  form {
    width: 45%;
    height: 550px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;

    .wrapper {
      height: 100%;
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;

      p {
        font-size: 18px;
        color: black;
        font-weight: 500;
        margin: 0;
        margin-top: 15px;
        margin-bottom: 10px;
      }

      input,
      textarea {
        height: 40px;
        border: 1px solid #00aa2e;
        border-radius: 10px;
        padding-left: 10px;
      }

      textarea {
        height: 80px;
      }

      .bottom_input {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .left {
          width: 45%;

          input {
            width: 100%;
            height: 90px;
            font-size: 50px;
          }
        }

        .right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          button {
            width: 100%;
            height: 95px;
            background-color: black;
            color: white;
            border: 0;
            border-radius: 10px;
            cursor:pointer;
          }
        }
      }
    }
  }
`;

function CreatePromise() {
  const onClickHandler = async (e) => {
    e.preventDefault();
    let detail = document.querySelector(".form-promise .promise").value;
    let time = document.querySelector(".form-promise .time").value;
    let email = document.querySelector(".form-promise .email").value;
    let ong = document.querySelector(".form-promise .ong").value;
    let amount = document.querySelector(
      ".form-promise .bottom_input .left .amount"
    ).value;

    if (
      detail === "" ||
      time === "" ||
      email === "" ||
      ong === "" ||
      amount === ""
    ) {
      alert("No se permiten campos vacíos!");
    } else {
      const response = await fetch(`/api/v1/promise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ detail, time, email, ong, amount }),
      });
      const responseJSON = await response.json();
      if (!responseJSON) {
        alert("Error al conectar con el servidor");
      } else {
        if (responseJSON.error) {
          console.log(responseJSON.error);
          alert("Error al conectar con el servidor");
        } else {
          alert("Has creado una promesa! Se te envió un correo con los detalles");
          window.location.reload();
          document.querySelector(".form-promise .promise").value = "";
          document.querySelector(".form-promise .time").value = "";
          document.querySelector(".form-promise .email").value = "";
          document.querySelector(".form-promise .ong").value = "";
          document.querySelector(
            ".form-promise .bottom_input .left .amount"
          ).value = "";
        }
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <div className="info">
          <h3>
            CHANGE YOURSELF <span>LIFE</span> AND OF OTHERS
          </h3>
        </div>
        <form className="form-promise">
          <div className="wrapper">
            <p>My fitness promise</p>
            <textarea
              className="promise"
              placeholder="Type here..."
              name="promise"
            />
            <p>Estimated time</p>
            <input
              className="time"
              type="text"
              placeholder="e.g. 1 month"
              name="time"
            />
            <p>Email</p>
            <input
              className="email"
              type="email"
              placeholder="e.g. myemail@gmail.com"
              name="email"
            />
            <p>ONG to donate</p>
            <input
              className="ong"
              type="text"
              placeholder="e.g. utopia"
              name="ong"
            />
            <div className="bottom_input">
              <div className="left">
                <p>Amount</p>
                <input
                  className="amount"
                  type="number"
                  placeholder="0"
                  name="amount"
                />
              </div>
              <div className="right">
                <button onClick={onClickHandler}>CREATE PROMISE</button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}

export default CreatePromise;
