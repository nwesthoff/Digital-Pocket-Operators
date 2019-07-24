import ReactDOM from "react-dom";
import App from "./components/App";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemePO16 } from "./config/Theme";
import { MuiThemeProvider } from "@material-ui/core";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export default class Index extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={ThemePO16}>
        <GlobalStyle />
        <App />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
