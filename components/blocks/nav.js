import React from "react";
import {
  CloseMenu,
  OpenMenu,
  Instagram,
  Facebook,
} from "@/components/atoms/Icons";

import Link from "next/link";

import { Envelope } from "@/components/atoms/Icons";

function Nav() {
  const navLinks = [
    {
      title: "nos",
      url: "/",
    },
    {
      title: "historias",
      url: "/",
    },
    {
      title: "diario",
      url: "/",
    },
  ];

  return (
    <nav className="h-auto w-auto text-white text-45 flex ">
      <div className="z-1 ">
        <div className="w-14 1024:hidden">
          {/* retirar z-1 e meter no CloseMenu quando aberto menu */}
          <OpenMenu />
        </div>
        <div className="hidden">
          <CloseMenu />
        </div>
      </div>
      <ul className=" bg-primary text-center absolute top-0 right-0 w-full h-full">
        {navLinks.map((navLink, i) => {
          return (
            <li className="py-4" key={i}>
              <Link
                prefetch={false}
                className="font-power-grotesk "
                href={navLink.url}
              >
                <p>{navLink.title}</p>
              </Link>
            </li>
          );
        })}
        <li className="flex justify-center py-8">
          <button className="flex border-none rounded-md text-45 px-12 pt-4 pb-2 ">
            <p>olá</p>
            <div className="picture ml-12 w-12 shrink-0">
              <Envelope />
            </div>
          </button>
        </li>
        <li className="py-4 flex justify-center ">
          <div className=" w-14 mr-8">
            <Instagram />
          </div>
          <div className="w-8">
            <Facebook />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
