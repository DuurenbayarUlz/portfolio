import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomStack } from "../Stack";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tech: string[];
  href: string;
  imgPath: string;
}

export const ProjectCardDesktop = ({
  title,
  description,
  tech,
  imgPath,
  href,
}: Props) => {
  return (
    <Link href={href} target="_blank">
      <CustomStack>
        <Box
          position="relative"
          height={80}
          sx={{
            borderRadius: "10px",
            border: "1px solid #D3D3D3",
            minWidth: 120,
            overflow: "hidden",
          }}
        >
          <Image
            fill
            src={imgPath}
            alt="mongol-api"
            style={{ objectFit: "cover" }}
            sizes="100%"
          />
        </Box>

        <Stack sx={{ marginLeft: "20px" }}>
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
                size="small"
              />
            ))}
          </Box>
        </Stack>
      </CustomStack>
    </Link>
  );
};
