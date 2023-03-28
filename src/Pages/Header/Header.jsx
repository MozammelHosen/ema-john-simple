import React from "react";

const Header = () => {
  return (
    <>
      <div className="navbar bg-blue-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52 text-white font-bold"
            >
              <li>
                <a href="#">Order</a>
              </li>
              <li>
                <a href="#">Order Reviwes</a>
              </li>
              <li>
                <a href="#">Manager Investor</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            <li>
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Order Reviwes</a>
            </li>
            <li>
              <a href="#">Manager Investor</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Header;
