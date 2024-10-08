"use client";

import "./button.sass";
import { IButton } from "./type";

import Spinner from "../spinner/spinner";

const Button = ({
  text,
  theme = "primary1",
  width = "w120px",
  height = "h58px",
  shadow = true,
  alternativeFontColor = false,
  changingStyle = false,
  loading = false,
  disabled = false,
  onClick
}: IButton) => {

  const buttonClass = `button button_bg_${theme} button_${width} button_${height}` + (alternativeFontColor ? " button_font_color800" : "") + (disabled ? " button_disabled" : "");
  const buttonShadow = `button_${width}` + (shadow ? " button_shadow" : "") + (changingStyle ? " button_changing-style" : "");

  return (
    <div className={buttonShadow}>
      <button
        className={buttonClass}
        disabled={disabled || loading}
        onClick={onClick}
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