import { styled } from "@mui/material";
import MuiStack from "@mui/material/Stack";

interface MuiStackProps {
  children: React.ReactNode;
  direction?: "row" | "column";
}

const StyledStack = styled(MuiStack)<MuiStackProps>(({ theme }) => {
  return {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(5),
    transition: "box-shadow .3s",

    "&:hover": {
      boxShadow: "0 0 8px rgba(33,33,33,.2)",
      cursor: "pointer",
    },
  };
});

export const CustomStack = ({ children }: MuiStackProps) => {
  return <StyledStack direction="row">{children}</StyledStack>;
};
