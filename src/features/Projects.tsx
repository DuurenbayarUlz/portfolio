import { Box, Stack, Typography } from "@mui/material";
import {
  ProjectCardDesktop,
  ProjectCardMobile,
} from "../components/project-card";

const projectData = [
  {
    title: "Mongol API",
    description:
      "Open source API service that is dedicated to providing accurate information about Mongolia.",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Vercel",
      "GraphQL",
      "Rest",
      "NX",
    ],
    href: "https://mongol-api.vercel.app/",
    imgPath: "/projects/api.png",
  },
  {
    title: "Movie App",
    description:
      "A movie app that displays up to date information about movies and TV shows.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "MovieDB API"],
    href: "https://movie-site-phi-eight.vercel.app/",
    imgPath: "/projects/movie.png",
  },
];

export const Projects = ({ isMobile }: { isMobile?: boolean }) => {
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
          <Typography variant="subtitle1">PROJECTS</Typography>
        </Box>

        {projectData.map((item, index) => (
          <Box key={index} sx={{ marginY: "8px" }}>
            <ProjectCardMobile {...item} />
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
            <ProjectCardDesktop {...item} />
          </Box>
        ))}

        <Typography variant="body1" sx={{ color: "grey" }}>
          Powered by NextJS and Material UI, deployed on Vercel
        </Typography>
      </Stack>
    </section>
  );
};
