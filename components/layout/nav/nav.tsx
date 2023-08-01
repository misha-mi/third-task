"use client";

import "./nav.sass";
import Link from "next/link";
import Image from "next/image";
import chevron from "@/public/Chevron.svg";

import Dropdown from "@/components/ui/dropdown/dropdown";
import { useState } from "react";

const Nav = () => {

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const chevronClassName = "nav__chevron" + (openDropdown ? " active" : "")

  return (
    <div className="nav">
      <Link className="nav__my-subscriptions" href="/">My subscriptions</Link>
      <div className="nav__user" onClick={() => setOpenDropdown(state => !state)}>
        Alex
        <Image
          className={chevronClassName}
          src={chevron}
          alt={'chevron'}
        />
      </div>
      {openDropdown ? (
        <div className="nav__dropdown">
          <Dropdown />
        </div>
      ) : null}
    </div>
  )
}

export default Nav;
