import { createMuiTheme } from "@material-ui/core/styles";

const CommonTheme = {
  typography: {
    fontWeightRegular: 300
  },
  palette: {
    grey: {
      50: "silver"
    }
  }
};

export const ThemePO16 = createMuiTheme({
  ...CommonTheme,
  palette: {
    primary: {
      main: "#FA7548",
      dark: "#C05133"
    },
    secondary: {
      main: "#F6BA71"
    }
  }
});

export const ThemePO28 = createMuiTheme({
  ...CommonTheme,
  palette: {
    primary: {
      main: "#F5110E",
      dark: "#B7281A"
    },
    secondary: {
      main: "#D8A971"
    }
  }
});
