import React, { Component } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { synthStore } from "../stores/SynthStore";
import { observer } from "mobx-react";
import WriteMode from "../icons/common/Writemode";
import Metronome from "../icons/common/Metronome";
import { format } from "date-fns";

const PODisplayFrame = styled.div`
  margin: 1.2rem;
`;

const PODisplayBackground = styled.div`
  background-color: ${synthStore.theme.palette.grey[50]};
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
  right: 5px;
`;

const TimeValue = styled(Typography)`
  position: absolute;
  top: 10px;
  right: 5px;
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

const MetronomePositioned = styled(Metronome)`
  position: absolute;
  top: 15px;
  left: 5px;
`;

@observer
export default class PODisplay extends Component {
  render() {
    return (
      <PODisplayFrame>
        <PODisplayBackground>
          <MetronomePositioned />
          <HipHop
            variant="body1"
            style={{
              opacity: Math.round(synthStore.bpm) === 80 ? 1 : 0.1
            }}
          >
            HIP-HOP
          </HipHop>
          <Disco
            variant="body1"
            style={{ opacity: Math.round(synthStore.bpm) === 120 ? 1 : 0.1 }}
          >
            DISCO
          </Disco>
          <Dub
            variant="body1"
            style={{ opacity: Math.round(synthStore.bpm) === 140 ? 1 : 0.1 }}
          >
            TECHNO
          </Dub>
          {synthStore.modifiers.write ? <WriteMode /> : null}
          {/* {Transport.state === "started" ? <Playing /> : null} */}
          {synthStore.modifiers.bpm ? (
            <BPMValue variant="h5">{Math.round(synthStore.bpm)}</BPMValue>
          ) : (
            <TimeValue variant="h5">{format(Date(), "hh:mm A")}</TimeValue>
          )}
        </PODisplayBackground>
      </PODisplayFrame>
    );
  }
}
