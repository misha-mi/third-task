
import { useEffect, useState, MutableRefObject } from "react";

const useOutsideClick = (elementRef: MutableRefObject<HTMLElement | null>, func: () => void) => {

  const [start, setStart] = useState(false);

  const onClick = (e: Event) => {
    if (!elementRef.current?.contains(e.target as Node) && start) {
      func();
    }
  }

  setTimeout(() => setStart(true));

  useEffect(() => {
    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    };
  })
}

export default useOutsideClick;


