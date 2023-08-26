"use client"

import "./input.sass";
import CheckSVG from "@/lib/svg/check-svg";
import CloseSVG from "@/lib/svg/close-svg";

import { IInput } from "./type";

const Input = ({ placeholder, register, required, status, error = false, pattern, minLength = 0 }: IInput) => {

  let inputClassName: string;

  if (status === "start") {
    inputClassName = "input"
  } else if (!error) {
    inputClassName = "input input_success"
  } else {
    inputClassName = "input input_error"
  }

  return (
    <div className={inputClassName}>
      <input
        type="text"
        className="input__input"
        placeholder={placeholder}
        {...register(
          (placeholder[0].toLowerCase() + placeholder.slice(1)).replace(" ", ""),
          {
            required,
            minLength: minLength ? (
              {
                value: minLength,
                message: `${placeholder} must be longer than or equal to ${minLength} characters`
              }
            ) : undefined,
            pattern: pattern
          }
        )}
      />

      <CheckSVG className="input__icon-done input__icon" />
      <CloseSVG className="input__icon-close input__icon" />
    </div>
  )
}

export default Input;