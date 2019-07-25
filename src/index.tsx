import ReactDOM from "react-dom";
import App from "./components/App";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemePO28 } from "./config/Theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export default class Index extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={ThemePO28}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="theme-color" content={ThemePO28.palette.primary.main} />
        </Helmet>
        <GlobalStyle />
        <App />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
