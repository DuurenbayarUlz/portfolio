import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";

export const Social = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <Stack
      direction="row"
      sx={{ marginY: isMobile ? "16px" : "32px" }}
      justifyContent="space-around"
      alignItems="center"
      maxWidth={140}
    >
      <Link href="https://www.instagram.com/drnbyr_/" target="_blank">
        <Instagram sx={{ fontSize: 30, color: "grey" }} />
      </Link>

      <Link href="https://www.linkedin.com/in/duuree/" target="_blank">
        <LinkedIn sx={{ fontSize: 30, color: "grey" }} />
      </Link>

      <Link href="https://github.com/duurenbayarulz" target="_blank">
        <GitHub sx={{ fontSize: 26, color: "grey" }} />
      </Link>
    </Stack>
  );
};
