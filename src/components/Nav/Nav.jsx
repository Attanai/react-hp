import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="bg-black">
        <div className=" flex flex-wrap md:flex-col items-center justify-between md:justify-center mx-12 py-8 ">
          <NavLink to="/">
            <h1 class="pt-4 text-6xl text-[#86b9b0]">HP</h1>
          </NavLink>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-inherit ">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-black hover:text-[#d0d6d6] md:text-[#d0d6d6] md:hover:text-[#4c7273] rounded hover:bg-[#4c7273] md:hover:bg-transparent md:border-0 md:p-0 text-center font-bold text-2xl"
                >
                  Charaters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Spells"
                  className="block py-2 pl-3 pr-4 text-black hover:text-[#d0d6d6] md:text-[#d0d6d6] md:hover:text-[#4c7273] rounded hover:bg-[#4c7273] md:hover:bg-transparent md:border-0 md:p-0 text-center font-bold text-2xl"
                >
                  Spells
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
