import React from "react";
import Nav from "./Nav";
import { Logo } from "@/components/atoms/Icons";
import Container from "../ui/container";

function Header() {
  return (
    <Container>
      <header className="w-full h-auto pt-5 flex justify-between">
        <Logo />
        <Nav />
      </header>
    </Container>
  );
}

export default Header;
