import ReactDOM from "react-dom";
import App from "./components/App";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { synthStore } from "./stores/SynthStore";
import { observer } from "mobx-react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1e1e1e;
    padding: 0;
    margin: 0;
    overscroll-behavior: none;
  }
`;

@observer
export default class Index extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={synthStore.theme}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta
            name="theme-color"
            content={synthStore.theme.palette.primary.main}
          />
        </Helmet>
        <GlobalStyle />
        <App />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
