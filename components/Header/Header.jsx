"use client";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Typo from '@/assets/Typo.png'
import { Links } from "@/components/Header/Links";
import { useEffect, useState } from "react";

export const Header = () => {
  const [navToggled, setNavToggled] = useState(false);
  const toggle = (e) => setNavToggled(!navToggled);
  useEffect(() => {
    if (navToggled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navToggled]);
  
  return (
    <header className="h-20 w-full flex justify-center z-[90000]">
      <div className="w-full h-16 "></div>
      <div className="fixed w-full h-16 blur-2xl bg-background"></div>

      <div className="fixed container w-full h-16 flex justify-between items-end ">
        <div id="logo">
          <Link className="text-heading text-3xl font-bold" href={"/"}>
            <Image alt="" className="h-16 w-auto"  src={Typo}/>
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 ">
          <Links />
        </nav>
        <nav
          onClick={()=>setNavToggled(false)}
          id="mob-nav"
          className={`custom-mob-nav md:hidden flex flex-col absolute w-screen h-svh inset-y-0 start-full bg-primary transition-transform ease-in-out duration-300 ${
            navToggled && " -translate-x-full"
          }`}
        >
          <div className="container h-16 flex justify-end ">
            <button onClick={toggle}>
              <IoCloseSharp className="text-heading text-3xl pointer-events-none" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 flex-grow">
            <Links />
          </div>
        </nav>
        <button className="md:hidden" onClick={toggle}>
          <RiMenu3Line className="text-heading text-3xl pointer-events-none" />
        </button>
      </div>
    </header>
  );
};
