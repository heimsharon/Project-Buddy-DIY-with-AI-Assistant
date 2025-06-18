import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <p>This is the about page of your custom React template.</p>
    </AboutContainer>
  );
};

export default About;
