import React, { useState } from "react";

import {
  Box,
  Stack,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box>
          <Navbar />
          <Stack direction={"row"} justifyContent="space-evenly" spacing={2}>
            <Sidebar handleMode={setMode} mode={mode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
