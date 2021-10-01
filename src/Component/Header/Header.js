import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
// import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
      <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}  to="/home">Home</NavLink></li>
      <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/friends">Friends</NavLink></li>
      <li><NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/about">About</NavLink></li>
        </div>
    );
};

export default Header;