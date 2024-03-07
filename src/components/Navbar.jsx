import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header
      className="header  flex items-center justify-between
     px-4 py-4 fixed top-0 left-0 right-0 z-10"
    >
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white 
      items-center justify-center flex font-bold shadow-md"
      >
        <p
          className=" bg-gradient-to-r from-cyan-500 to-blue-500 inline-block 
         text-transparent bg-clip-text"
        >
          BI
        </p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
