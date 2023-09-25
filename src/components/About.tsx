import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const About = ({ isMobile }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Stack sx={{ paddingTop: 8 }}>
        <Box sx={{ paddingY: "16px" }}>
          <Typography variant="subtitle1">ABOUT</Typography>
        </Box>

        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci
          dapibus ultrices in iaculis nunc sed augue.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.
        </Typography>
      </Stack>
    );
  }

  return (
    <section id="about">
      <Stack sx={{ paddingTop: 24 }}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci
          dapibus ultrices in iaculis nunc sed augue.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.
        </Typography>
      </Stack>
    </section>
  );
};
