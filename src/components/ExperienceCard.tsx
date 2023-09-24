import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  date: string;
  role: string;
  description: string;
  skills: string[];
  isMobile?: boolean;
}

export const ExperienceCard = ({
  date,
  role,
  description,
  skills,
  isMobile,
}: Props) => {
  if (isMobile) {
    return (
      <Stack direction="row">
        <Box width="30%">
          <Typography variant="body2">{date}</Typography>
        </Box>
        <Stack width="70%">
          <Typography variant="body2">{role}</Typography>
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
            {skills.map((skill, index) => (
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
      <Box width="30%">
        <Typography variant="body2">{date}</Typography>
      </Box>
      <Stack width="70%">
        <Typography variant="body1">{role}</Typography>
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
          {skills.map((skill, index) => (
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
