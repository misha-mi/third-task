import "./dropdown.sass";
import SettingsSVG from "@/lib/svg/settings-svg";
import LogOutSVG from "@/lib/svg/log-out-svg";

import Link from "next/link";

import { useAppDispatch } from "@/store/redux-hooks";
import { setEmail, setToken, setUsername } from "@/store/ducks/auth";

const Dropdown = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  const dispatch = useAppDispatch();

  const handlerLogOut = () => {
    dispatch(setToken(""));
    dispatch(setUsername(""));
    dispatch(setEmail(""));

    document.cookie = 'token=; path=/; expires=-1';
    location.replace("/");
  }

  return (
    isOpen ? (
      <div className="dropdown">
        <ul className="dropdown__wrapper">
          <li>
            <Link href="/settings" className="dropdown__item" onClick={onClose}>
              <SettingsSVG className="dropdown__icon" />
              Settings
            </Link>
          </li>
          <li>
            <Link href="/" className="dropdown__item" onClick={handlerLogOut}>
              <LogOutSVG className="dropdown__icon" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    ) : null
  )
}

export default Dropdown;