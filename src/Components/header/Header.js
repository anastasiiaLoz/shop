import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/">Shop Car</a>
      <nav>
        <ul className="list">
          <li className="listItem">
            <a href="/home" className="link">
              Home
            </a>
          </li>
          <li className="listItem">
            <a href="/products" className="link">
              Products
            </a>
          </li>
          <li className="listItem">
            <a href="/admin" className="link">
              Admin
            </a>
          </li>
          <li className="listItem">
            <a href="/registration" className="link">
              Registration
            </a>
          </li>
          <li className="listItem">
            <a href="/login" className="link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
