import { Box, Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container disableGutters maxWidth="lg">
      {children}
    </Container>
  );
};
