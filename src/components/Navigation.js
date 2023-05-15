import React from "react";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'

function Navigation() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" itemType="submit" url="http://localhost:3000/" />
        <ul className="nav-menu"></ul>

        <Link to="/home">
          <li>Home</li>
        </Link>

        <Link to="/list-recipes">
          <li>List Of Recipes </li>
        </Link>

      </div>
    </>
  );
}

export default Navigation;
