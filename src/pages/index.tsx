import { About } from "@/components/About";
import { Section } from "@/components/Section";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Section>
      <Stack sx={{ padding: "96px" }}>
        <About />
      </Stack>
    </Section>
  );
};

export default Home;
