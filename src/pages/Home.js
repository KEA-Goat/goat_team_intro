import React from 'react';
import logo from '../assets/img/logoWhite.png' // 로고 크기 25% 증가
import styled from 'styled-components';

const ContainerStyle = styled.div`
    text-Align: center;
    background-Color: black;
    color: white;
    height: 100vh;
`

const CenterStyle = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
    
const Home = () => {
    return (
        <ContainerStyle>
            <CenterStyle>
                <img src={logo} alt="logo" />
            </CenterStyle>
        </ContainerStyle>
    )
};

export default Home;