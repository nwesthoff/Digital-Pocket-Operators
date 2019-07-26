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

const HipHop = styled(Typography)`
  position: absolute;
  top: 10px;
  left: 30px;
`;

const Disco = styled(Typography)`
  position: absolute;
  top: 10px;
  left: 100px;
`;

const Dub = styled(Typography)`
  position: absolute;
  top: 25px;
  left: 30px;
`;

@observer
export default class PODisplay extends Component {
  render() {
    return (
      <PODisplayFrame>
        <PODisplayBackground>
          <HipHop
            variant="body1"
            style={{
              opacity: synthStore.bpm === 80 ? 1 : 0.1
            }}
          >
            HIP-HOP
          </HipHop>
          <Disco
            variant="body1"
            style={{ opacity: synthStore.bpm === 100 ? 1 : 0.1 }}
          >
            DISCO
          </Disco>
          <Dub
            variant="body1"
            style={{ opacity: synthStore.bpm === 120 ? 1 : 0.1 }}
          >
            TECHNO
          </Dub>
          <BPMValue variant="h5">{synthStore.bpm}</BPMValue>
        </PODisplayBackground>
      </PODisplayFrame>
    );
  }
}
