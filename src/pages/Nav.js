import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';
import './Nav.css'

const Nav_div = styled.div`
    width :100%;
    background-color:black;
    padding: 15px 0px;
    text-align :right;
`

const Nav_Link = styled(Link)`
    color:white;
    margin: 8px;
    text-decoration: none;
`

const Nav = () => {

    return (
        <>

        <nav>
            <Nav_div>
                <Nav_Link to="/"> Home </Nav_Link>
                <Nav_Link to="/team"> Members </Nav_Link>
                <Nav_Link to="/vision"> Vision </Nav_Link>
                <Nav_Link to="/custom"> Custom </Nav_Link>
            </Nav_div>
        </nav>

        <Outlet/>
        </>

    );
}

export default Nav;