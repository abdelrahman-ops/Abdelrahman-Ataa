import { useState, useEffect } from "react";

// Custom Hook to handle window resizing
const useWindowWidth = (breakpoint = 768) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return show;
};

export default useWindowWidth;
