"use client";

import "./nav.sass";
import Link from "next/link";
import Image from "next/image";
import chevron from "@/public/Chevron.svg";
import close from "@/public/close.svg";

import Dropdown from "@/components/ui/dropdown/dropdown";
import { useState } from "react";
import Logo from "@/components/ui/logo/logo";

const Nav = () => {

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const chevronClassName = "nav__chevron" + (openDropdown ? " active" : "");
  const navClassName = "nav" + (openNav ? " open" : "");

  return (
    <>
      <div
        className="nav__burger"
        onClick={() => setOpenNav(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={navClassName}>
        <div className="nav__wrapper">
          <div className="nav__header">
            <Image className="nav__close"
              src={close}
              alt={close}
              onClick={() => setOpenNav(false)}
            />
            <Logo />
          </div>
          <Link className="nav__my-subscriptions" href="/">My subscriptions</Link>
          <div className="nav__dividers">
            <div
              className="nav__user"
              onClick={() => setOpenDropdown(state => !state)}
            >
              Alex
              <span className={`icon-chevron ${chevronClassName}`}></span>
            </div>
            {openDropdown ? (
              <div className="nav__dropdown">
                <Dropdown />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;
