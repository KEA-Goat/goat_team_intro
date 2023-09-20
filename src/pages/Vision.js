import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logoWhite.png'


const VisionContainer = styled.div`
    border: 2px solid black; 
    padding: 20px; 
    line-height: 1.5; 
    font-size: 18px; 
    background-color: black;
    color: white;


    width:${props => props.containerWidth}px;
    height:${props => props.containerHeight}px;
    display:flex;
    flex-direction:column;
    judtify-content:center;
    //align-items:center;
  //  background-color: #27ae60;

`;
const Title = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;
const Title1 = styled.div`
    font-size: 65px;
    padding: 30px;
    margin-top: 70px;
`;
const Title2 = styled.div`
    font-size: 85px;
    padding: 20px;
    margin-top: -50px;
`;

const LogoImg = styled.div`
    left: 100%;
    transform:translateX(-50%);
`
const Content = styled.div`
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
`;

const LogoImgStyle = styled.div`
    margin-left:auto;
    width: 600px;
`;

const Vision = () => {
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [containerHeight, setContainerHeight] = useState(window.innerHeight);
    
    useEffect(()=>{
        const handleResize=()=>{
            setContainerWidth(window.innerWidth);
            setContainerHeight(window.innerHeight);
        };


        window.addEventListener('resize', handleResize);
        
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    }, []
    
);



    return (
        <VisionContainer containerWidth={containerWidth} containerHeight = {containerHeight}>
            <Title>
            <div style={{
                    width:'1500px',
                    height:'200px'
                }}>
            <Title1>
                Great Of All Time
            </Title1>
            <Title2>
                Greator Of All Team
            </Title2>
            </div>
            {/* <div style={{
                    width: '55% ',
                }}><img src={logo} alt="logo" /></div> */}
            <LogoImgStyle>
                <img src = {logo} alt = "logo"/>
            </LogoImgStyle>
            </Title>
            
            <Content>
                시도하는 용기, 열정있는 배움, 효율적인 소통, <br />
                그리고 팀과 팀원에 대한 책임으로 <br />
                어제보다 더 나아갈 great+or
            </Content>
        </VisionContainer>
    )
};

export default Vision;