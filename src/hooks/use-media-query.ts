import { Theme, useMediaQuery as MuiUseMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const query = MuiUseMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  useEffect(() => {
    setIsAvailable(query);
  }, [query]);

  return isAvailable;
};
