import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const About = ({ isMobile }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Stack sx={{ paddingTop: 8 }}>
        <Box
          sx={{
            paddingY: "16px",
            backgroundColor: "white",
            position: "sticky",
            top: "0px",
          }}
        >
          <Typography variant="subtitle1">ABOUT</Typography>
        </Box>

        <Typography variant="body1">Hey there 👋,</Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          I&apos;m a recent graduate from Kalamazoo College with a double major
          in Computer Science and Economics.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          Over the past 3 years, I&apos;ve had the opportunity to create
          software products for AI startup company and educational institution.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          When I am not coding, you will find me playing basketball, rock
          climbing, and running. In addition to sports, I enjoy spending quality
          time with my friends and creating memories.
        </Typography>
      </Stack>
    );
  }

  return (
    <section id="about">
      <Stack sx={{ paddingTop: 24 }}>
        <Typography variant="body1">Hey there 👋,</Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          I&apos;m a recent graduate from Kalamazoo College with a double major
          in Computer Science and Economics.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          Over the past 3 years, I&apos;ve had the opportunity to create
          software products for AI startup company and educational institution.
        </Typography>
        <Typography variant="body1" sx={{ paddingTop: 4 }}>
          When I am not coding, you will find me playing basketball, rock
          climbing, and running. In addition to sports, I enjoy spending quality
          time with my friends and creating memories.
        </Typography>
      </Stack>
    </section>
  );
};
