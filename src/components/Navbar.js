import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="text-2x1 cursor-pointer flex items-center">
          <span className="logotxt text-3xl mr-1 pt-2">CSS - LAB</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="icon text-3xl absolute right-6 top-3 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`ulnav md:flex md:items-center md:pb-0 text-center md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
            open ? "top-20 opacity-100 block" : "top-10 absolute"
          } md:opacity-100 opacity-0`} 
        >
          <li className="navitem md:ml-8">
            <button onClick={() => onNavigate("home")}>Home</button>
          </li>
          <li className="navitem md:ml-8">
            <button onClick={() => onNavigate("documentation")}>
              Documentation
            </button>
          </li>
          <li className="navitem md:ml-8">
            <button onClick={() => onNavigate("about")}>About</button>
          </li>
          <li className="navitem codeedi md:ml-8">
            <button onClick={() => onNavigate("code-editor")}>
              <ion-icon name="code-slash-outline"></ion-icon>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
