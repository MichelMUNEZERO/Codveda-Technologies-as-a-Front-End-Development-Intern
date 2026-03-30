import React from "react";

export default function Head() {
  return (
    <header className="header-wrap">
      <div className="header-bar">
        <div className="logo">AnimateX</div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
