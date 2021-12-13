import styled from 'styled-components'
import {Link} from "react-router-dom";
import React from 'react';

const Container = styled.div`
    height: 10vh;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 3px solid #00AA2E;

    .nav-options{
        width: 55%;
        min-width: 50%;
        margin-right: 5%;
        padding: 0;
        height: 100%;
        font-weight: 300;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a{
            font-size: 25px;
            cursor: pointer;
            color: black;
            text-decoration: none;
        }
    }
`

function NavBar(){
    return(
        <Container>
            <ul className="nav-options">
                <Link to="/home">HOME</Link>
                <Link to="/create-promise">CREATE PROMISE</Link>
                <Link to="/promises">MY PROMISES</Link>
            </ul>  
        </Container>
    )
}

export default NavBar;