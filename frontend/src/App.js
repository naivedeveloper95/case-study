import React, { useState } from "react";
import Header from './Component/Header';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignIn from "./Component/SignIn";
import "./App.css";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // Define your primary color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Define your primary color
    },
  },
});

function App() {
  // Use state to switch between themes
  const [theme, setTheme] = useState(lightTheme);

  // Function to toggle theme
  const toggleTheme = () => setTheme(theme === lightTheme ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <SignIn />
      </div>
    </ThemeProvider>
  );
}

export default App;
