"use client";

import "./nav.sass";
import ChevronSVG from "@/lib/svg/chevron-svg";
import CloseSVG from "@/lib/svg/close-svg";

import Dropdown from "@/components/ui/dropdown/dropdown";
import Logo from "@/components/ui/logo/logo";
import Link from "next/link";

import { useAppSelector } from "@/store/redux-hooks";
import { useState } from "react";

const Nav = () => {

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const username = useAppSelector(state => state.auth.username);

  const chevronClassName = "nav__chevron" + (openDropdown ? " active" : "");
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
            <div className="nav__wrapper">

              <div className="nav__header">
                <CloseSVG
                  className="nav__close"
                  onClick={() => setOpenNav(false)}
                />
                <Logo />
              </div>

              <Link className="nav__my-subscriptions" href="/subscriptions">My subscriptions</Link>

              <div className="nav__dividers">
                <div
                  className="nav__user"
                  onClick={() => setOpenDropdown(state => !state)}
                >
                  {username}
                  <ChevronSVG className={`${chevronClassName}`} />
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
      ) : null}

    </>
  )
}

export default Nav;
