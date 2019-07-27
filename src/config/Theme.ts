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

export const POThemes = {
  ThemePO14: {
    name: "sub",
    theme: createMuiTheme({
      ...CommonTheme,
      palette: {
        primary: {
          main: "#02C6EE",
          dark: "#077F9A"
        },
        secondary: {
          main: "#F6BA71"
        }
      }
    })
  },
  ThemePO16: {
    name: "factory",
    theme: createMuiTheme({
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
    })
  },
  ThemePO28: {
    name: "robot",
    theme: createMuiTheme({
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
    })
  }
};
