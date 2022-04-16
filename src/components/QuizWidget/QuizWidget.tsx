import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import StartScreen from '../Screens/StartScreen';

const Container = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
`;

function QuizWidget() {
  return (
    <Container>
      <Header />
      <StartScreen />
    </Container>
  );
}

export default QuizWidget;
