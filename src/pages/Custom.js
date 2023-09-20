import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/goat_size1.png';
import img2 from '../assets/img/goat_size2.png';
import img3 from '../assets/img/goat_size3.png';
import img4 from '../assets/img/goat_size4.png';

const contents=[
  {
    name: 'goat1',
    img: img1,
  },
  {
    name: 'goat2',
    img:img2,
  },
  {
    name:'goat3',
    img:img3,
  },
  {
    name:'goat4',
    img:img4,
  },
];

// 스타일드 컴포넌트를 사용하여 스타일을 적용
const GoatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  height: 100vh;
`;


const GoatMember = styled.div`
  width: 250px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const TextStyle =styled.div`
  width: 'auto';
  margin: 20px;
  padding: 10px;
  height: 10%;
  border: 1px solid #ccc;
  text-align: left;
  font-size: xx-large;
`
const MainDivStyle = styled.div`
  background: linear-gradient(to bottom, #F0612B, #F1DAA5);
`

const Custom = () => {
  return(
    <MainDivStyle>

      <TextStyle>
        <h1>For Greator</h1>
      </TextStyle>

      <GoatContainer>
        {contents.map((member,index) => (
        <GoatMember key = {index}>
         <img src ={member.img}></img>
         <h2>{member.name}</h2>
        </GoatMember>
        ))}
       </GoatContainer>
      
    </MainDivStyle>




    
  )
}




export default Custom;