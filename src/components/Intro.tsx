import { useWindowSize } from "@/hooks/useWindowSize";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Navigation } from "./Navigation";

export const Intro = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 900 : false;

  return (
    <>
      <Stack maxWidth={528}>
        <Link href="/">
          <Typography variant="h3">Duurenbayar Ulziiduuren</Typography>
        </Link>
        <Typography variant="subtitle1" sx={{ paddingTop: "12px" }}>
          Software Engineer at Pinecone
        </Typography>
        <Typography
          sx={{ paddingTop: "12px", maxWidth: "400px", color: "grey" }}
        >
          I am a software engineer with a passion for building products that
          people love.
        </Typography>

        {!isMobile && <Navigation />}
      </Stack>
    </>
  );
};
