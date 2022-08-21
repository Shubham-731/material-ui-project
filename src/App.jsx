import React from "react";

// MUI
import { Typography, styled, Button } from "@mui/material";

const App = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "blue",
    margin: 4,
    "&:hover": {
      backgroundColor: "darkblue",
    },
  }));

  const SecondaryBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        component={"p"}
        sx={{
          color: "purple",
        }}
      >
        It uses h3 variant but it's a p tag
      </Typography>
      <Typography variant="h6" color={"primary"}>
        this is h6 tag
      </Typography>
      <BlueButton>My button</BlueButton>
      <SecondaryBtn>Secondary Btn</SecondaryBtn>
    </>
  );
};

export default App;
