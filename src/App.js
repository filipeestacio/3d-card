import React from 'react';
import Card from './components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Card url="/images/rubic-cube.jpg" />
    </Wrapper>
  );
}

export default App;
