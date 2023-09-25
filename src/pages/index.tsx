"use client";

import { About } from "@/features/About";
import { Experience } from "@/features/Experience";
import { Intro } from "@/features/Intro";
import { Projects } from "@/features/Projects";
import { Section } from "@/components/Section";
import { Social } from "@/features/Social";
import { useDelay } from "@/hooks/use-delay";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Box, Container, Grid, Stack } from "@mui/material";

const Home = () => {
  const isMobile = useMediaQuery();
  const isReadyToRender = useDelay();

  if (!isReadyToRender) {
    return <Box />;
  }

  if (isMobile) {
    return (
      <Container disableGutters sx={{ maxWidth: "500px" }}>
        <Stack sx={{ paddingX: "12px" }}>
          <Intro isMobile />
          <Social isMobile />
          <About isMobile />
          <Experience isMobile />
          <Projects isMobile />
        </Stack>
      </Container>
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
