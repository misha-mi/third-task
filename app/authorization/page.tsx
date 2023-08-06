import Link from "next/link";
import Form from "@/components/ui/form/form";

export default function Authorization() {
  return (
    <>
      <h2 className="authorization__title">Create account</h2>
      <p className="authorization__need">
        You need to enter your name and email. We will send you a temporary password by email
      </p>

      <div className="authorization__form">
        <Form inputs={{
          "Username": "", "Email": "", "Password": ""
        }} buttonText="Send password" />
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