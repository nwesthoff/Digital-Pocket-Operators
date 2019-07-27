import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import POButtonGrid from "./POButtonGrid";
import PODisplay from "./PODisplay";
import POHeader from "./POHeader";

const PhoneContainer = styled.div`
  border-radius: 5px;
  max-width: 100%;
  width: 414px;
  height: 100%;
  background-color: #000;
`;

const StackUpsideDown = styled(Grid)`
  height: 100%;
  width: 100%;
  padding-bottom: 0.8rem;
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
          <StackUpsideDown
            container
            direction="row"
            justify="center"
            alignContent="flex-end"
          >
            <Grid item style={{ width: "100%" }}>
              <POHeader />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <PODisplay />
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <POButtonGrid />
            </Grid>
          </StackUpsideDown>
        </PhoneContainer>
      </Grid>
    );
  }
}
