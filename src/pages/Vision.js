import React from 'react';
import styled from 'styled-components';


const VisionContainer = styled.div`
    border: 2px solid black; 
    padding: 20px; 
    line-height: 1.5; 
    font-size: 18px; 
    background-color: #27ae60;
`;
const Vision = () => {
    return (
        <VisionContainer>
            <div className="Title">
                <h1>GOAT팀의 비전</h1>

                </div>
                <ul> {}
                    <li style={{ marginBottom: '10px' }}>
                        저희의 팀명 GOAT는 Great Of All Time 역대 최고라는 뜻에서 오마주를 하여 만든 팀명으로 Greator Of All Time이라는 뜻으로 만들었습니다.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        Greator라는 말은 great에 or을 붙여서 great한 사람들이라는 뜻을 나타내고 싶었습니다.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        우리 GOAT 팀원들이 각자의 인생에서 더 나은 사람이 되자는 팀원 모두의 포부를 담은 단어입니다.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        그렇기에 저희는 당장에 부족한 사람이라는 것을 인정하지만 시도하는 용기, 열정 있는 배움, 효율적인 소통 그리고 팀과 팀원에 대한 책임으로 우리의 어제보다 나아가 인생에서 가장 great한 사람이 되는 팀이 되겠습니다.
                    </li>
                </ul> {}
        </VisionContainer>
);

    





};

export default Vision;
