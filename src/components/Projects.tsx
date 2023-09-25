import { Box, Stack, Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "Mongol API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["TypeScript", "React", "Next.js", "Node.js"],
    href: "",
  },
  {
    title: "Mongol API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["TypeScript", "React", "Next.js", "Node.js"],
    href: "",
  },
  {
    title: "Mongol API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["TypeScript", "React", "Next.js", "Node.js"],
    href: "",
  },
];

export const Projects = ({ isMobile }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Stack sx={{ paddingTop: 8 }}>
        <Box sx={{ paddingY: "16px" }}>
          <Typography variant="h6">PROJECTS</Typography>
        </Box>

        {projectData.map((item, index) => (
          <Box key={index} sx={{ marginY: "8px" }}>
            <ProjectCard {...item} isMobile />
          </Box>
        ))}

        <Typography variant="body2" sx={{ color: "grey", paddingY: "32px" }}>
          Powered by NextJS and Material UI, deployed on Vercel
        </Typography>
      </Stack>
    );
  }

  return (
    <section id="projects">
      <Stack sx={{ paddingY: 24 }}>
        {projectData.map((item, index) => (
          <Box key={index} sx={{ marginY: "16px" }}>
            <ProjectCard {...item} />
          </Box>
        ))}

        <Typography variant="body1" sx={{ color: "grey" }}>
          Powered by NextJS and Material UI, deployed on Vercel
        </Typography>
      </Stack>
    </section>
  );
};
