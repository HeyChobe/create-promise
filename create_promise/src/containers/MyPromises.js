import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Promise from "../components/Promise";
import ModalConfirmation from "../components/ModalConfirmation";

const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 80%;
  width: 90%;
  border-radius: 10px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  .item_wrapper {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
  }
`;

function MyPromises({ data }) {
  let [modalStatus, setModalStatus] = useState(false);
  let [promises, setPromises] = useState(data);
  let [count, setCount] = useState(0);
  let [id, setId] = useState("");

  // const data = [
  //   {
  //     number: "1",
  //     date: "01/12/2021",
  //     description:
  //       "loremLasd qwalksdja qweas qwdiasud aslkdqpwoi asldkjqwoi aslkdjalkdaapquwq qweq qweqwe w ejfie osid",
  //     donation: "$100 a SalvaPatron",
  //   },
  //   {
  //     number: "2",
  //     date: "01/12/2021",
  //     description:
  //       "loremLasd qwalksdja qweas qwdiasud aslkdqpwoi asldkjqwoi aslkdjalkdaapquwq qweq qweqwe w ejfie osid",
  //     donation: "$100 a SalvaPatron",
  //   },
  //   {
  //     number: "3",
  //     date: "01/12/2021",
  //     description:
  //       "loremLasd qwalksdja qweas qwdiasud aslkdqpwoi asldkjqwoi aslkdjalkdaapquwq qweq qweqwe w ejfie osid",
  //     donation: "$100 a SalvaPatron",
  //   },
  //   {
  //     number: "4",
  //     date: "01/12/2021",
  //     description:
  //       "loremLasd qwalksdja qweas qwdiasud aslkdqpwoi asldkjqwoi aslkdjalkdaapquwq qweq qweqwe w ejfie osid",
  //     donation: "$100 a SalvaPatron",
  //   },
  // ];

  const getPromises = async () => {
    const response = await fetch(`/api/v1/promise`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJSON = await response.json();
    if (!responseJSON) {
      return { error: "Cannot connect to the server" };
    } else {
      if (responseJSON.error) {
        console.log(responseJSON.error);
      } else {
        console.log(responseJSON);
        setPromises(responseJSON);
      }
    }
  };

  const onCloseModal = (reload) => {
    setModalStatus(false);
    if(reload) window.location.reload();
  };

  const onOpenModal = (id) => {
    setModalStatus(true);
    setId(id);
  };

  return (
    <Wrapper>
      <Container>
        <div className="item_wrapper">
          {promises.map((item) => (
            <Promise
              id={item._id}
              key={item._id}
              action={onOpenModal}
              number={count}
              date={item.date}
              description={item.detail}
              donation={item.amount}
              ong={item.ong}
            />
          ))}
          {modalStatus ? (
            <ModalConfirmation action={onCloseModal} id={id} />
          ) : (
            ""
          )}
        </div>
      </Container>
    </Wrapper>
  );
}

export default MyPromises;
