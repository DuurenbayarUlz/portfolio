import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import {
  ExperienceCardDesktop,
  ExperienceCardMobile,
} from "../components/experience-card";

const data = [
  {
    date: "2022 - Present",
    role: "Software Engineer - Pinecone",
    description: "Working on the student report delivery system",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "AWS",
      "CI/CD",
    ],
    href: "/",
  },
  {
    date: "2021 - 2022",
    role: "Software Engineer - RenderedAI",
    description: `Worked on the development team, building the next syntheitc data generation platform`,
    skills: [
      "TypeScript",
      "React",
      "Gatsby.js",
      "Node.js",
      "AWS",
      "Jest",
      "Cypress",
    ],
    href: "/",
  },
];

export const Experience = ({ isMobile }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Stack sx={{ paddingTop: 8 }}>
        <Box
          sx={{
            paddingY: "16px",
            position: "sticky",
            top: "0px",
            backgroundColor: "white",
          }}
        >
          <Typography variant="subtitle1">EXPERIENCE</Typography>
        </Box>

        {data.map((item, index) => (
          <Box key={index} sx={{ marginY: "8px" }}>
            <ExperienceCardMobile {...item} />
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
                width: "90px",
                justifyContent: "space-between",
              },
            }}
          >
            <Typography variant="body1">Resume</Typography>
            <ArrowForwardIcon />
          </Box>
        </Link>
      </Stack>
    );
  }

  return (
    <section id="experience">
      <Stack sx={{ paddingTop: 24 }}>
        {data.map((item, index) => (
          <Box key={index} sx={{ marginY: "16px" }}>
            <ExperienceCardDesktop {...item} />
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
                width: "90px",
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
