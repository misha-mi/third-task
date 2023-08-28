"use client";

import "./nav.sass";
import ChevronSVG from "@/lib/svg/chevron-svg";
import CloseSVG from "@/lib/svg/close-svg";

import Dropdown from "@/components/ui/dropdown/dropdown";
import Logo from "@/components/ui/logo/logo";
import Link from "next/link";

import { useAppSelector } from "@/store/redux-hooks";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

const Nav = () => {

  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));
  useOutsideClick(navRef, () => setOpenNav(false));

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const username = useAppSelector(state => state.auth.username);

  const chevronClassName = "nav__chevron" + (isOpen ? " active" : "");
  const navClassName = "nav" + (openNav ? " open" : "");

  return (
    <>
      {username ? (
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
            <div className="nav__wrapper" ref={navRef}>

              <div className="nav__header">
                <CloseSVG
                  className="nav__close"
                  onClick={() => setOpenNav(false)}
                />
                <Logo />
              </div>

              <Link className="nav__my-subscriptions" href="/subscriptions">My subscriptions</Link>

              <div className="nav__dividers" ref={dropdownRef}>
                <div
                  className="nav__user"
                  onClick={() => {
                    setIsOpen(state => !state)
                  }}
                >
                  {username}
                  <ChevronSVG className={`${chevronClassName}`} />
                </div>

                <div className="nav__dropdown">
                  <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
              </div>

            </div>
          </div>
        </>
      ) : null}

    </>
  )
}

export default Nav;
