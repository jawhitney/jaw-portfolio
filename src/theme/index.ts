import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5f5",
    },
    background: {
      paper: "#027FA2",
      default: "#027FA2",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#027FA2",
    },
    background: {
      paper: "#f5f5f5",
      default: "#f5f5f5",
    },
  },
});
