import React, { Component } from "react";
import { ThemePO16 } from "../config/Theme";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const PODisplayFrame = styled.div`
  margin: 1.2rem;
`;

const PODisplayBackground = styled.div`
  background-color: ${ThemePO16.palette.secondary.main};
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class PODisplay extends Component {
  render() {
    return (
      <PODisplayFrame>
        <PODisplayBackground>
          <Typography variant="overline">Display Comes Here</Typography>
        </PODisplayBackground>
      </PODisplayFrame>
    );
  }
}
