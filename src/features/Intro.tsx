import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Navigation } from "./Navigation";

export const Intro = ({ isMobile }: { isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <Stack sx={{ paddingTop: 8 }}>
        <Link href="/">
          <Typography variant="h1">Duurenbayar Ulziiduuren</Typography>
        </Link>
        <Typography variant="h2" sx={{ paddingTop: "8px" }}>
          Software Engineer at Pinecone
        </Typography>
        <Typography variant="body2" sx={{ paddingTop: "8px", color: "grey" }}>
          I am a software engineer with a passion for building products that
          people love.
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack maxWidth={528}>
      <Link href="/">
        <Typography variant="h1">Duurenbayar Ulziiduuren</Typography>
      </Link>
      <Typography variant="h2" sx={{ paddingTop: "12px" }}>
        Software Engineer at Pinecone
      </Typography>
      <Typography
        variant="body1"
        sx={{ paddingTop: "12px", maxWidth: "400px", color: "grey" }}
      >
        I am a software engineer with a passion for building products that
        people love.
      </Typography>

      <Navigation />
    </Stack>
  );
};
