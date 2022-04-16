import React from 'react';
import styled from 'styled-components';
import * as StartImg from '../../../public/start-screen.png';

const Container = styled.div`
  padding: 0 24px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e8f0f2 0%, rgba(232, 240, 242, 0) 100%);
`;

const MainText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #2196f3;
`;

const SubText = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  color: #3a4850;
`;

const StartButton = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
`;

const StartScreenImage = styled.img.attrs({
  src: `${StartImg}`,
});

function StartScreen() {
  return (
    <Container>
      <StartScreenImage />
      <MainText>Let’s find your perfect pair!</MainText>
      <SubText>
        Take the quiz to easily discover your perfect fit from thousands of
        styles
      </SubText>
      <StartButton>Start Now</StartButton>
    </Container>
  );
}

export default StartScreen;
