import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import img1 from '../assets/img/goat_size1.png';

const contents=[
  {
    name: 'goat1',
    text: ' aaa',
    img: img1,
  },
  {
    name: 'goat2',
    text: 'bbb',
    img:img1,
  },
  {
    name:'goat3',
    text: 'ccc',
    img:img1,
  },
  
];

// 스타일드 컴포넌트를 사용하여 스타일을 적용
const MainContainer = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 250px 50px 250px;
  height: 100vh;
`;
const TopContainer = styled.div`
  display: flex;
  //align-item: center;
  // text-align:left;
  height:40vh;
`;
const BottomContainer = styled.div`
  display: flex;
  text-align: left;
  background-: black;
  color:white;
  align-item:center;
`;


const TextContents = styled.div`
  text-align:left;
  align-item: center;
  margin:5px;
  padding:10px;
  width:100vh;
`;
const TitleContainer = styled.div`
  color:black;
  font-size:x-large;
`;
const TextContainer =styled.div`
  font-size: x-large;
  width:75vh;
`
const ButtonContainer = styled.div`
  //background:black;
  color:white;
  text-align: left;
  align-item:left;
  font-size:small;
`;


const ImgContainer = styled.div`

`;
const ContentsContainer = styled.div`
  width: 250px;
  margin: 20px;
  padding: 10px;
  text-align: center;
  background: black;
  color:white;
`;



const Custom = () => {
  return(
  <MainContainer>
    <TopContainer>
      <TextContents>
        <TitleContainer>
        <h1> Join Our Team </h1>
        </TitleContainer>
        <TextContainer>
          <p>We are a team of strategic thinkers and strorytellers who create content that cuts through the noise. We're here to produce work that makes an impact.</p>
        </TextContainer>
        <ButtonContainer>
          <button className='버튼'>Find Our Work</button>
        </ButtonContainer>
      </TextContents>
      <ImgContainer>
        <img src={logo} alt="logo" />
      </ImgContainer>
    </TopContainer>

    <BottomContainer>
      {/* {contents.map({content, index} => (
        <ContentsContainer key = {index}>
           <img src={member.img} alt={member.name} />
           <h2>{contents.name}</h2>
           <p>{contents.role}</p>
           <p>{contents.text}</p>
        </ContentsContainer>

      ))} */}
    </BottomContainer>
  </MainContainer>

    
  );
}




export default Custom;