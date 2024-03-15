import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <ul className="flex flex-wrap p-4">
          <li className="">
            <NavLink to="" className={({ isActive }) => `text-xl m-2 p-2 rounded-md ${isActive ? "bg-blue-500" : ""}`}>
              Header
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => `text-xl m-2 p-2 rounded ${isActive ? "bg-blue-500" : ""}`}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              className={({ isActive }) => `text-xl m-2 p-2 rounded ${isActive ? "bg-blue-500" : ""}`}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="calendar"
              className={({ isActive }) => `text-xl m-2 p-2 rounded ${isActive ? "bg-blue-500" : ""}`}
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
