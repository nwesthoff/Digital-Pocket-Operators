import React, { Component } from "react";
import { ThemePO28 } from "../config/Theme";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { synthStore } from "../stores/SynthStore";
import { observer } from "mobx-react";

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
  position: relative;
`;

const BPMValue = styled(Typography)`
  position: absolute;
  top: 10px;
  right: 25px;
`;

@observer
export default class PODisplay extends Component {
  render() {
    return (
      <PODisplayFrame>
        <PODisplayBackground>
          <Typography variant="overline">Display Comes Here</Typography>
          <BPMValue variant="h5">{synthStore.bpm}</BPMValue>
        </PODisplayBackground>
      </PODisplayFrame>
    );
  }
}
