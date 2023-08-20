"use client"

import "./input.sass";
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
        )
        }
      />
      <span className="icon-close input__icon-close input__icon"></span>
      <span className="icon-done input__icon-done input__icon"></span>
    </div>
  )
}

export default Input;