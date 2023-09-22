import { Typography, Box, Stack, List, ListItem } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const navData = [
  { topic: "About", href: "#about" },
  { topic: "Experience", href: "#experience" },
  { topic: "Projects", href: "#projects" },
];

export const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "80px",
        maxWidth: "160px",
      }}
    >
      {navData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={() => handleItemClick(index)}
        >
          <Typography
            variant="subtitle1"
            sx={{
              paddingTop: "12px",
              color: selectedItem === index ? "black" : "grey",
              paddingLeft: selectedItem === index ? "12px" : "0px",
              "&:hover": {
                paddingLeft: "12px",
                color: "black",
              },
            }}
          >
            {item.topic}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};
