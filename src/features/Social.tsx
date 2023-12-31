import React from "react";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";

export const Social = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <Stack
      direction="row"
      sx={{ marginY: isMobile ? "16px" : "32px" }}
      justifyContent="space-between"
      alignItems="center"
      maxWidth={isMobile ? 112 : 140}
    >
      <Link href="https://www.instagram.com/drnbyr_/" target="_blank">
        <Instagram
          sx={{
            fontSize: 30,
            color: "grey",
            "&:hover": {
              color: "#d62976",
              fontSize: 32,
            },
            transition: "all 0.2s ease",
          }}
        />
      </Link>

      <Link href="https://www.linkedin.com/in/duuree/" target="_blank">
        <LinkedIn
          sx={{
            fontSize: 30,
            color: "grey",
            "&:hover": {
              color: "#0072b1",
              fontSize: 32,
            },
            transition: "all 0.2s ease",
          }}
        />
      </Link>

      <Link href="https://github.com/duurenbayarulz" target="_blank">
        <GitHub
          sx={{
            fontSize: 26,
            color: "grey",
            "&:hover": {
              color: "#000",
              fontSize: 28,
            },
            transition: "all 0.2s ease",
          }}
        />
      </Link>
    </Stack>
  );
};
