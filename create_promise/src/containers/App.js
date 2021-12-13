import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Home from "./Home";
import CreatePromise from "./CreatePromise";
import MyPromises from "./MyPromises";
import ModalConfirmation from "../components/ModalConfirmation";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

h1,h2,h3,h4,h5,h6,a,p,textarea,input{
  font-family: "Roboto";
  padding: 0;
}
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  let [promises, setPromises] = useState([]);

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
        console.log(responseJSON)
        setPromises(responseJSON);
      }
    }
  };

  useEffect(() => {
    getPromises();
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/create-promise">
          <CreatePromise />
        </Route>
        <Route path="/promises">
          <MyPromises data={promises}/>
        </Route>
        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
