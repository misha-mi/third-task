"use client";

import Link from "next/link"

import { usePathname } from "next/navigation";

const SettingsTabs = () => {

  const pathname = usePathname();
  return (
    <div className="settings-layout__tabs">
      <Link
        href={"/settings"}
        className={`settings-layout__link ${!pathname.includes("change-password") ? "settings-layout_active" : ""}`}
      >
        Personal info
      </Link>
      <Link
        href={"/settings/change-password"}
        className={`settings-layout__link ${pathname.includes("change-password") ? "settings-layout_active" : ""}`}
      >
        Change password
      </Link>
    </div >
  )
}

export default SettingsTabs;