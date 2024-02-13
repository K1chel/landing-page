"use client";

import { Open_Sans } from "next/font/google";
import Image from "next/image";

import { Wrapper } from "../wrapper";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import { NavItem } from "./nav-item";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";

const font = Open_Sans({ subsets: ["latin"] });

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="pt-5 bg-primary text-white w-full inset-x-0">
      <Wrapper className="flex items-center justify-between h-[81px]">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" width={49} height={49} />
          <p
            className={cn(
              "text-[20px] font-semibold leading-normal",
              font.className
            )}
          >
            Bubble Bash
          </p>
        </div>
        <div className="md:flex hidden items-center gap-x-10">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.key} label={link.label} />
          ))}
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleOpen}
            className="p-2 hover:bg-dark/20 transition rounded-full active:-rotate-180 duration-500 z-[99] absolute right-5 top-8"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
          <div
            className={cn(
              "fixed top-0 bg-dark w-full h-full z-50 transition-all duration-500",
              isOpen ? "left-0" : "left-full"
            )}
          >
            <div className="flex items-center justify-center flex-col w-full h-full gap-y-10">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.key} label={link.label} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
