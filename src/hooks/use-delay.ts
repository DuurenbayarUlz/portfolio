import { useEffect, useState } from "react";

export const useDelay = () => {
  const [safeToRender, setSafeToRender] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setSafeToRender(true);
    }, 500);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  return safeToRender;
};
