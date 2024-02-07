import React from 'react';
import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
