import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #f8f9fa;
  margin-bottom: 2rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #007bff;
    }
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
