import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ExperienceCard } from "./ExperienceCard";

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
      <Stack sx={{ paddingTop: 24 }}>
        {data.map((item, index) => (
          <Box key={index} sx={{ margin: "16px" }}>
            <ExperienceCard {...item} />
          </Box>
        ))}

        <Link target="_blank" href="/resume.pdf">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                textDecoration: "underline",
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              },
            }}
          >
            <Typography>Resume</Typography>
            <ArrowForwardIcon />
          </Box>
        </Link>
      </Stack>
    </section>
  );
};
