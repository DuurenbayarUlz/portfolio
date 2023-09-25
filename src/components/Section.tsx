import { Box, Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        width: "100%",
      }}
    >
      <Container disableGutters maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
};
