import React from "react";
import Button from "../Common/Button/Button";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <a href="#">
          <li className="icon">Estatery</li>
        </a>
        <a href="#" className="rent">
          <li>Rent</li>
        </a>
        <a href="#">
          <li>Buy</li>
        </a>
        <a href="#">
          <li>Sell</li>
        </a>
        <a href="#">
          <li>
            <select name="property" id="property">
              <option value="manage property">Manage Property</option>
              <option value="dummy">Dummy</option>
              <option value="dummy">Dummy</option>
              <option value="dummy">Dummy</option>
            </select>
          </li>
        </a>
        <a href="#">
          <li>
            <select name="property" id="property">
              <option value="manage property">Resources</option>
              <option value="dummy">Dummy</option>
              <option value="dummy">Dummy</option>
              <option value="dummy">Dummy</option>
            </select>
          </li>
        </a>
      </ul>
      <div className="btns">
        {/* <button id="login">Login</button> */}
        <Button text="Login" id="login" />
        <Button text="Signup" />
      </div>
    </nav>
  );
};

export default Navbar;
