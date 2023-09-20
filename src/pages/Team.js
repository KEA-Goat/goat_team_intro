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
    email: 'epicuros18@gmail.com',
    img: img1,
  },
  {
    name: '김민수',
    role: '프론트엔드',
    email: 'ms987796@gmail.com',
    img: img2,
  },
  {
    name: '신민서',
    role: '프론트엔드',
    email: 'minseo9451@gmail.com',
    img: img3,
  },
  {
    name: '강예진',
    role: '백엔드',
    email: 'yejin331@gachon.ac.kr',
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
  text-align: center;
`;

const Body = styled.div`
  background-color: rgb(158, 210, 160);
  text-align: center; /* 텍스트를 중앙 정렬 */
  padding: 20px; /* 위아래 여백 추가 */
`;

const Team = () => {
  return (
    <div>
      <Body>
        <h1>Contact Our Team</h1> {/* Contact Our Team 텍스트 추가 */}
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>Email: {member.email}</p>
            </TeamMember>
          ))}
        </TeamContainer>
      </Body>
    </div>
  );
};

export default Team;
