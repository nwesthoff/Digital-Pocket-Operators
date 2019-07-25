import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import POButtonGrid from "./POButtonGrid";
import PODisplay from "./PODisplay";
import POHeader from "./POHeader";

const PhoneContainer = styled.div`
  max-height: 100%;
  max-width: 100%;
  width: 414px;
  height: 896px;
  background-color: #000;
`;

const StackUpsideDown = styled(Grid)`
  height: 100%;
  width: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: "100vh" }}
      >
        <PhoneContainer>
          <StackUpsideDown container direction="column" justify="flex-end">
            <POHeader />
            <PODisplay />
            <POButtonGrid />
          </StackUpsideDown>
        </PhoneContainer>
      </Grid>
    );
  }
}
