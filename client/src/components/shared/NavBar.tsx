import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  singleLevelDropdownMenu from './SingleLevelDropdownMenu'
import { faList } from '@fortawesome/free-solid-svg-icons';



export default  function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-menus">
    <NavLink to="/" className="nav-home">
      Home
    </NavLink>
      <singleLevelDropdownMenu
        buttonLabel="Projects"
        menuItems={[

          {
          title: 'All Projects',
          url: '/allprojects',
          icon: <i className="fa-list" /> ,

        {
          title: 'Current Project',
          url: '/current-projects',
          icon: <i className="fas-solid fa-hammer " /> },

        {
          title: 'Create Project',
           url: '/create-project',
            icon: <i className="fas fa-plus" /> },
      ]}
      />
        </div>






const Navigation: React.FC = () => {

