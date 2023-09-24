"use client";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Social } from "@/components/Social";
import { useDelay } from "@/hooks/use-delay";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Box, Grid, Stack } from "@mui/material";

const Home = () => {
  const isMobile = useMediaQuery();
  const isReadyToRender = useDelay();

  if (!isReadyToRender) {
    return <Box />;
  }

  if (isMobile) {
    return (
      <Section>
        <Stack sx={{ paddingX: "24px" }}>
          <Intro isMobile />
          <About isMobile />
          <Experience isMobile />
          <Projects />
          <Social />
        </Stack>
      </Section>
    );
  }

  return (
    <Section>
      <Stack sx={{ paddingX: "96px", height: "100vh" }}>
        <Grid container>
          <Grid item md={6}>
            <Stack
              sx={{
                position: "sticky",
                top: 96,
                left: 0,
              }}
              height="calc(100vh - 192px)"
              justifyContent="space-between"
            >
              <Intro />
              <Social />
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Stack sx={{ paddingX: "24px" }}>
              <About />
              <Experience />
              <Projects />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
};

export default Home;
