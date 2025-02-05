import React from "react";
import "./style.css";
import { useState } from "react";
import logo from "./logof4f.svg";

export const Header = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <header>
        <img className="logo" src={logo} />
      </header>
    </div>
  );
};
