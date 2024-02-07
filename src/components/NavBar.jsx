import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';

const NavBar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default NavBar;
