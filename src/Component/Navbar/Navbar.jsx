import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MyLogo from "/src/assets/Muhamed 1.png";

function Navbar() {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 shadow-md bg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={MyLogo} className="w-12 h-12 rounded-full bg-cover" alt=" Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
           
            <button
            onClick={()=> setIsOpen(!isOpen)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="xs:inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="nav1 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="nav-active flex flex-col p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="NavLink  font-bold block py-1 px-5 "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myProjects"
                  className="NavLink font-bold block  py-1 px-5 "
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Contact"
                  className="NavLink font-bold block   py-1 px-5 "
                >
                  Contact
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
