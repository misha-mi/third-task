import "./dropdown.sass";

import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <ul className="dropdown__wrapper">
        <li>
          <Link href="/" className="dropdown__item">
            <span className="icon-settings dropdown__icon"></span>
            Settings
          </Link>
        </li>
        <li>
          <Link href="/" className="dropdown__item">
            <span className="icon-logout dropdown__icon"></span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown;