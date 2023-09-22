import { Intro } from "@/components/Intro";
import { Section } from "@/components/Section";
import { Social } from "@/components/Social";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Section>
      <Stack
        sx={{ padding: "96px", height: "100vh" }}
        justifyContent="space-between"
      >
        <Intro />
        <Social />
      </Stack>
    </Section>
  );
};

export default Home;
