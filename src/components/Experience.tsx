import { Box, Stack } from "@mui/material";
import { Card } from "./Card";

const data = [
  {
    date: "2018-Present",
    role: "Lead Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.`,
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    date: "2016-2016",
    role: "Software Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          tempor orci dapibus ultrices in iaculis nunc sed augue.`,
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
  },
];

export const Experience = () => {
  return (
    <section id="experience">
      <Stack height="100vh" sx={{ paddingTop: 24 }}>
        {data.map((item, index) => (
          <Box key={index} sx={{ margin: "16px" }}>
            <Card {...item} />
          </Box>
        ))}
      </Stack>
    </section>
  );
};
