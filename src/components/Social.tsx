import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Stack } from "@mui/material";

export const Social = () => {
  return (
    <Stack
      direction="row"
      sx={{ marginY: "32px" }}
      justifyContent="space-around"
      alignItems="center"
      maxWidth={140}
    >
      <Instagram sx={{ fontSize: 30, color: "grey" }} />
      <LinkedIn sx={{ fontSize: 30, color: "grey" }} />
      <GitHub sx={{ fontSize: 26, color: "grey" }} />
    </Stack>
  );
};
