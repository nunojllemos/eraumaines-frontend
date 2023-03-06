import React from "react";
import {
  CloseMenu,
  OpenMenu,
  Instagram,
  Facebook,
} from "@/components/atoms/Icons";

import { Envelope } from "@/components/atoms/Icons";

function Nav() {
  const urls = ["nós", "histórias", "diário"];

  return (
    <nav className="h-auto w-auto text-white text-45 flex ">
      <div className="z-1 ">
        <div className=" 1024:hidden">
          {/* retirar z-1 e meter no CloseMenu quando aberto menu */}
          <OpenMenu />
        </div>
        <div className=" hidden">
          <CloseMenu />
        </div>
      </div>
      <ul className=" bg-primary text-center absolute top-0 right-0 w-full h-full items-center">
        {urls.map((url, i) => {
          return (
            <li className="py-2.5" key={i}>
              <a className="leading-10">{url}</a>
            </li>
          );
        })}
        <li className="flex justify-center py-2.5">
          <button className="flex justify-center border-none rounded-md text-45 p-5">
            <p>Olá</p>
            <div className="picture ml-6 w-12 shrink-0">
              <Envelope />
            </div>
          </button>
        </li>
        <li className="py-2.5 ">
          <Instagram />
          <Facebook />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
