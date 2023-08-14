
import Link from "next/link";
import Title from "@/components/ui/title/title";

import SignUpForm from "@/components/layout/sign-up-form/sign-up-form";
import ReduxProvider from "@/components/layout/provider/provider";

export default function Authorization() {
  return (
    <>
      <div className="authorization__title">
        <Title titleText="Create account" />
      </div>
      <p className="authorization__need">
        You need to enter your name and email. We will send you a temporary password by email
      </p>

      <div className="authorization__form">
        <ReduxProvider>
          <SignUpForm />
        </ReduxProvider>
      </div>

      <p className="authorization__have">
        Have an account?
        <Link
          href={"/authorization/log-in"}
          className="authorization__next"
        >
          Go to the next step
        </Link>
      </p>
    </>
  )
}