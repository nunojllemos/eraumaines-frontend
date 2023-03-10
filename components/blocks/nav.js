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
      <div className="z-1">
        <button className="w-14 h-full bg-transparent border-none 1024:hidden">
          {/* retirar z-1 e meter no CloseMenu quando aberto menu */}
          <OpenMenu />
        </button>

        <button className="hidden ">
          <CloseMenu />
        </button>
      </div>
      <div className="bg-primary absolute text-center top-0 right-0 w-full h-full flex items-center justify-center 1024:bg-transparent 1024:relative ">
        <ul className="1024:flex 1024:items-center 1024:text-28">
          {navLinks.map((navLink, i) => {
            return (
              <li className="py-4 1024:pr-8 1024:py-0" key={i}>
                <Link
                  prefetch={false}
                  className="font-power-grotesk"
                  href={navLink.url}
                >
                  <p>{navLink.title}</p>
                </Link>
              </li>
            );
          })}
          <li className="hidden 1024:flex mr-10">
            <div className=" w-12 mr-8">
              <Link href={"https://www.instagram.com/"}>
                <Instagram />
              </Link>
            </div>
            <div className="w-7">
              <Link href={"https://www.facebook.com/"}>
                <Facebook />
              </Link>
            </div>
          </li>
          <li className="flex justify-center pb-8 pt-4 1024:pr-8  ">
            <button className="flex border-none font-power-grotesk rounded-md text-45 px-12 py-2 1024:text-28">
              <p>ola</p>
              <div className="picture ml-8 w-16 shrink-0 1024:ml-4 1024:w-12">
                <Envelope />
              </div>
            </button>
          </li>
          <li className="pb-4 flex justify-center 1024:hidden">
            <div className=" w-14 mr-8">
              <Link href={"https://www.instagram.com/"}>
                <Instagram />
              </Link>
            </div>
            <div className="w-8">
              <Link href={"https://www.facebook.com/"}>
                <Facebook />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
