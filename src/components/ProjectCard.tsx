import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tech: string[];
  href: string;
}

export const ProjectCard = ({ title, description, tech, href }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        borderRadius: "8px",
        paddingTop: "0px",
      }}
    >
      <Box
        width="30%"
        height={80}
        sx={{
          borderRadius: "10px",
          border: "1px solid #D3D3D3",
        }}
      >
        <Image src="" alt="" />
      </Box>
      <Stack width="70%" sx={{ marginLeft: "20px" }}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" sx={{ paddingTop: 4 }}>
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 4,
          }}
        >
          {tech.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{ marginRight: 2, marginBottom: 2 }}
            />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
