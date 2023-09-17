import React from 'react';
import logo from '../assets/img/logo.png'
import styled from 'styled-components';

const Wrapper = styled.div`

`


const Home = () => {
    
    return (
    <Wrapper>
    <h1> &nbsp; GOAT </h1>
    
    <img src={logo} alt="logo" />
    </Wrapper>
    )

};

export default Home;