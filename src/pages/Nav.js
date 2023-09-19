import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';



const Nav_div = styled.div`
    width :100%;
    background-color: ${(props) => props.backgroundColor || 'black'};
    padding: 15px 0px;
    text-align :right;
`

const Nav_Link = styled(Link)`
    color:white;
    margin: 8px;
    text-decoration: none;
`

const Nav = () => {
    const location = useLocation();//이부분이 페이지별 메뉴바 색상 지정
    const backgroundColor =
    location.pathname === '/'
    ? 'black'
    : location.pathname === '/team'
    ? 'black'
    : location.pathname === '/vision'
    ? 'black'
    : location.pathname === '/custom'
    ? 'black'
    : 'black';

    return (
        <>

            <nav>
                <Nav_div backgroundColor={backgroundColor}>
                    <Nav_Link to="/"> Home </Nav_Link>
                    <Nav_Link to="/team"> Members </Nav_Link>
                    <Nav_Link to="/vision"> Vision </Nav_Link>
                    <Nav_Link to="/custom"> Custom </Nav_Link>
                </Nav_div>
            </nav>

            <Outlet />
        </>

    );
}

export default Nav;