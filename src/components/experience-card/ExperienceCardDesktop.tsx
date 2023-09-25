import { Box, Chip, Stack, Typography } from "@mui/material";

interface Props {
  date: string;
  role: string;
  description: string;
  skills: string[];
}

export const ExperienceCardDesktop = ({ date, role, description, skills }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        borderRadius: "8px",
        paddingTop: "0px",
      }}
    >
      <Box sx={{ minWidth: 120 }}>
        <Typography variant="body1">{date}</Typography>
      </Box>
      <Stack sx={{ marginLeft: "20px" }}>
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
              size="small"
            />
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
