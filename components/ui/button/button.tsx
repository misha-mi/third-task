"use client"

import "./button.sass";
import { IButton } from "./type";

import Spinner from "../spinner/spinner";

import { useState } from "react";


const Button = ({ text, theme = "primary1", width = "w120px", height = "h58px", shadow = true, alternativeFontColor = false }: IButton) => {

  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const buttonClass = `button button_bg_${theme} button_${width} button_${height}` + (alternativeFontColor ? " button_font_color800" : "");
  const buttonShadow = `button_${width}` + (shadow ? " button_shadow" : "");

  return (
    <div className={buttonShadow}>
      <button
        className={buttonClass}
        disabled={disabled}
      >
        {
          loading ? (
            <Spinner color={theme} />
          ) : (
            text
          )
        }
      </button>
    </div>
  )
}

export default Button;