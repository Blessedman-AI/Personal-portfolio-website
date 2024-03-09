import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ modelLoad }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`flex w-full justify-center ${
        modelLoad < 100 && isHomePage ? 'hide' : ''
      }`}
    >
      <div
        className="header fixed pt-32 w-full max-w-[1080px] flex items-center justify-between
     px-4 py-4 z-10"
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
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 inline-block  text-transparent bg-clip-text'
                : 'text-black'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 inline-block  text-transparent bg-clip-text'
                : 'text-black'
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
