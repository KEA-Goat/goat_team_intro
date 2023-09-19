import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/img/goat_red.png';
import img2 from '../assets/img/goat_yellow.png';
import img3 from '../assets/img/goat_blue.png';
import img4 from '../assets/img/goat_pink.png';

// 팀원 정보를 나타내는 데이터 배열 (4명의 팀원 예시)
const teamMembers = [
  {
    name: '김성민',
    role: '팀 리더',
    email: '@example.com',
    img: img1,
  },
  {
    name: '김민수',
    role: '프론트엔드',
    email: '@example.com',
    img: img2,
  },
  {
    name: '신민서',
    role: '프론트엔드',
    email: '@example.com',
    img: img3,
  },
  {
    name: '강예진',
    role: '백엔드',
    email: '@example.com',
    img: img4,
  },
];

// 스타일드 컴포넌트를 사용하여 스타일을 적용
const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const TeamMember = styled.div`
  width: 250px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const headerStyle = {
  textAlign: 'center',
//  backgroundColor:'rgb(158, 210, 160)',
  color:'black',
}
const bodyStyle = {
  backgroundColor: 'rgb(158, 210, 160'
}
const Team = () => {
  return (
    <div>
      <div style={headerStyle}>
        <h1>Meet Our Team</h1>
      </div>

      <div style={bodyStyle}>
        <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <img src ={member.img}></img>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>Email: {member.email}</p>
          </TeamMember>
        ))}
      </TeamContainer>
      </div>
      
    </div>
  );
};

export default Team;