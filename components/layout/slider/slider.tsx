"use client";

import "./slider.sass"
import { ISlider, THandlerSwitchingSlider } from "./type";

import { useRef, useState } from "react";

const Slider = ({ children }: ISlider) => {

  const refBand = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [slide, setSlide] = useState(1);

  const handlerSwitchingSlider: THandlerSwitchingSlider = (step) => {
    if (refBand.current) {
      const gap = (refBand.current.scrollWidth - children.length * refBand.current.children[0].offsetWidth) / (children.length - 1);
      const moving = refBand.current.children[0].offsetWidth + gap;
      setPosition(state => state + moving * step);
      setSlide(state => state + step);
    }
  }

  return (
    <div className="slider">
      <div
        ref={refBand}
        className="slider__band"
        style={{ transform: `translateX(-${position}px)` }}
      >
        {children}
      </div>

      <div className="slider__controllers">
        <button
          className="slider__controller"
          onClick={() => handlerSwitchingSlider(-1)}
          disabled={slide === 1}
        >-1</button>
        <div className="slider__counter">{slide}<span>/{children.length}</span></div>
        <button
          className="slider__controller"
          onClick={() => handlerSwitchingSlider(1)}
          disabled={slide === children.length}
        >1</button>
      </div>
    </div>
  )
}

export default Slider;