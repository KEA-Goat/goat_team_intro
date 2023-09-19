import React from 'react';
import logo from '../assets/img/logoWhite.png'

import styled from 'styled-components';

const Wrapper = styled.div`

`


const Home = () => {
    const centerStyle={
        position: 'absolute',
        left:'50%',
        top: '50%',
        transform: 'translate(-50%, -50%',
    };
    const containerStyle={
        textAlign: 'center',
        backgroundColor:'black',
        color:'white',
        height:'100vh',
        //height:'100%',
    };

    return (
        <div style={containerStyle}>
            {/* <h1> &nbsp; GOAT </h1> */}
            <div style={centerStyle}>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )

};

export default Home;