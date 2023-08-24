"use client";

import "./slider.sass"
import ArrowSVG from "@/lib/svg/arrow-svg";
import { ISlider, THandlerSwitchingSlider } from "./type";

import { useRef, useState } from "react";

const Slider = ({ children }: ISlider) => {

  const refBand = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [slide, setSlide] = useState(1);
  const [startX, setStartX] = useState(0);
  const [differenceY, setDifferenceY] = useState(0);

  const handlerSwitchingSlider: THandlerSwitchingSlider = (step) => {
    if (refBand.current) {
      const gap = (refBand.current.scrollWidth - children.length * (refBand.current.children[0] as HTMLElement).offsetWidth) / (children.length - 1);
      const moving = (refBand.current.children[0] as HTMLElement).offsetWidth + gap;
      setPosition(moving * (slide + step - 1));
      setSlide(state => state + step);
    }
  }

  const handlerTouchStart = (event: any) => {
    setStartX(event.touches[0].clientX);
    setDifferenceY(event.touches[0].clientY);
  }

  const handlerTouchEnd = (event: any) => {
    if (event.changedTouches[0].clientX - startX > 50 && slide !== 1) {
      handlerSwitchingSlider(-1);
    } else if (event.changedTouches[0].clientX - startX < -50 && slide !== children.length) {
      handlerSwitchingSlider(1);
    } else {
      handlerSwitchingSlider(0);
    }
  }


  return (
    <div className="slider">
      <div
        ref={refBand}
        className="slider__band"
        style={{ transform: `translateX(-${position}px)` }}
        onTouchStart={handlerTouchStart}
        onTouchEnd={handlerTouchEnd}
      >
        {children.map((item, id) => (
          <div className={(id + 1) === slide ? "" : "slider__disabled"} key={id}>
            {item}
          </div>
        ))}
      </div>

      <div className="slider__controllers">
        <button
          className="slider__controller"
          onClick={() => handlerSwitchingSlider(-1)}
          disabled={slide === 1}
        >
          <ArrowSVG className="slider_rotate-180" />
        </button>
        <div className="slider__counter">{slide}<span>/{children.length}</span></div>
        <button
          className="slider__controller"
          onClick={() => handlerSwitchingSlider(1)}
          disabled={slide === children.length}
        >
          <ArrowSVG />
        </button>
      </div>
    </div>
  )
}

export default Slider;