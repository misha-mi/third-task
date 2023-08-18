import "./dropdown.sass";

import Link from "next/link";

import { useAppDispatch } from "@/store/redux-hooks";
import { setToken, setUsername } from "@/store/ducks/auth";

const Dropdown = () => {

  const dispatch = useAppDispatch();

  const handlerLogOut = () => {
    dispatch(setToken(""));
    dispatch(setUsername(""));
  }

  return (
    <div className="dropdown">
      <ul className="dropdown__wrapper">
        <li>
          <Link href="/settings" className="dropdown__item">
            <span className="icon-settings dropdown__icon"></span>
            Settings
          </Link>
        </li>
        <li>
          <Link href="/" className="dropdown__item" onClick={handlerLogOut}>
            <span className="icon-logout dropdown__icon"></span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown;