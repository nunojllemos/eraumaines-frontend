import React from "react";
import Nav from "./nav";
import { Logo } from "@/public/assets/icons/icons";

function Header() {
  return (
    <header className="w-full h-auto pt-5 flex justify-between">
      <div className="z-1 realtive">
        <Logo />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
