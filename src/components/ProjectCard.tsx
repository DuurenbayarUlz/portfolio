import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tech: string[];
  href: string;
  isMobile?: boolean;
}

export const ProjectCard = ({ title, description, tech, isMobile }: Props) => {
  if (isMobile) {
    return (
      <Stack direction="row" justifyContent="center">
        <Box
          width="40%"
          position="relative"
          height={70}
          sx={{
            borderRadius: "10px",
            border: "1px solid #D3D3D3",
            maxWidth: 120,
            overflow: "hidden",
          }}
        >
          <Image
            fill
            src={"/projects/mongol-api.png"}
            alt="mongol-api"
            style={{ objectFit: "cover" }}
            sizes="100%"
          />
        </Box>

        <Stack width="60%" sx={{ marginLeft: "20px" }}>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2" sx={{ paddingTop: 4 }}>
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              paddingTop: 2,
            }}
          >
            {tech.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                sx={{ marginRight: 2, marginBottom: 2 }}
                size="small"
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      direction="row"
      sx={{
        borderRadius: "8px",
        paddingTop: "0px",
      }}
    >
      <Box
        width="40%"
        position="relative"
        height={80}
        sx={{
          borderRadius: "10px",
          border: "1px solid #D3D3D3",
          maxWidth: 120,
          overflow: "hidden",
        }}
      >
        <Image
          fill
          src={"/projects/mongol-api.png"}
          alt="mongol-api"
          style={{ objectFit: "cover" }}
          sizes="100%"
        />
      </Box>

      <Stack width="60%" sx={{ marginLeft: "20px" }}>
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
