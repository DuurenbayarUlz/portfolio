import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  date: string;
  role: string;
  description: string;
  skills: string[];
}

export const ExperienceCardMobile = ({
  date,
  role,
  description,
  skills,
}: Props) => {
  return (
    <Stack direction="row">
      <Box sx={{ minWidth: "110px" }}>
        <Typography variant="h3">{date}</Typography>
      </Box>
      <Stack sx={{ marginLeft: "20px" }}>
        <Typography variant="h3">{role}</Typography>
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
};
