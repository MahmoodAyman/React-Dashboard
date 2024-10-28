import { useEffect, useRef } from "react";
export function useOutsideClick(handler, listenCatpuring = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCatpuring);
      return () =>
        document.removeEventListener("click", handleClick, listenCatpuring);
    },
    [handler, listenCatpuring]
  );
  return ref;
}
