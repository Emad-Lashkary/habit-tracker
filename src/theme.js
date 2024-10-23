import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      light: deepPurple[100],
      dark: deepPurple[900],
    },
  },
});

export default theme;
