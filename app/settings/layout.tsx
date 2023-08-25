import "./settings.sass";
import Title from "@/components/ui/title/title"

import { Metadata } from "next"
import PrivateRoute from "@/components/HOC/private-route";
import SettingsTabs from "@/components/ui/settings-tabs/settings-tabs";

export const metadata: Metadata = {
  title: 'GScore',
  description: 'Generated by create next app',
}

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivateRoute destinationPath="/settings">
      <div className="settings-layout">
        <div className="container">
          <Title titleText="Settings" />

          <SettingsTabs />

          {children}
        </div>
      </div>
    </PrivateRoute>
  )
}
