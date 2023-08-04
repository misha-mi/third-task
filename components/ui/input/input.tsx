"use client"

import "./input.sass";

interface IInput {
  placeholder: string;
}

const Input = ({ placeholder }: IInput) => {
  return (
    <input
      type="text"
      className="input input_error"
      placeholder={placeholder}
    />
  )
}

export default Input;