"use client";

import "./steps.sass";

import { usePathname } from "next/navigation";

const Steps = () => {

  const pathname = usePathname();

  return (
    <ul className="steps">
      <li className="steps__step">
        <h3 className="steps__name">Create account</h3>
        <div className="steps__indicator steps_active"></div>
      </li>
      <li className="steps__step">
        <h3 className="steps__name">Log in</h3>
        <div className={"steps__indicator" + (/authorization\//.test(pathname) ? " steps_active" : "")}></div>
      </li>
      <li className="steps__step">
        <h3 className="steps__name">Checkout</h3>
        <div className={"steps__indicator" + (/authorization\/\d/.test(pathname) ? " steps_active" : "")}></div>
      </li>
    </ul>
  )
}

export default Steps;