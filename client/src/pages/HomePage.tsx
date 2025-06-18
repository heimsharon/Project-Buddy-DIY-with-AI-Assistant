import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Your Custom React App</Title>
      <p>This is a custom template with React Router and Styled Components pre-configured.</p>
    </HomeContainer>
  );
};

export default Home;
