import { useEffect, useState } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const useWindowSize = () => {
  const [size, setSize] = useState<Props>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeHandler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return size;
};
