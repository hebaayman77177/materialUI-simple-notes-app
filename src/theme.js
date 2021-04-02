import { createMuiTheme } from "@material-ui/core";
import { deepOrange, green } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: green,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
