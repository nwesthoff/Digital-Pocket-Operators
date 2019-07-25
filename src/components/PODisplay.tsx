import React, { Component } from "react";
import { ThemePO28 } from "../config/Theme";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const PODisplayFrame = styled.div`
  margin: 1.2rem;
`;

const PODisplayBackground = styled.div`
  background-color: ${ThemePO28.palette.grey[50]};
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
