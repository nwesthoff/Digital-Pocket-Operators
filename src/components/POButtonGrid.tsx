import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import POButton from "./controls/POButton";
import POKnob from "./controls/POKnob";
import PO28Button1Icon from "../icons/PO28/Button1Icon";
import PO28Button2Icon from "../icons/PO28/Button2Icon";
import PO28Button3Icon from "../icons/PO28/Button3Icon";
import PO28Button4Icon from "../icons/PO28/Button4Icon";
import PO28Button5Icon from "../icons/PO28/Button5Icon";
import PO28Button6Icon from "../icons/PO28/Button6Icon";
import PO28Button7Icon from "../icons/PO28/Button7Icon";
import PO28Button8Icon from "../icons/PO28/Button8Icon";
import PO28Button9Icon from "../icons/PO28/Button9Icon";
import PO28Button10Icon from "../icons/PO28/Button10Icon";
import PO28Button11Icon from "../icons/PO28/Button11Icon";
import PO28Button12Icon from "../icons/PO28/Button12Icon";
import PO28Button13Icon from "../icons/PO28/Button13Icon";
import PO28Button14Icon from "../icons/PO28/Button14Icon";
import PO28Button15Icon from "../icons/PO28/Button15Icon";
import PO28Button16Icon from "../icons/PO28/Button16Icon";
import Tone from "tone";
import { synthStore } from "../stores/SynthStore";
import { observer } from "mobx-react";

@observer
export default class POButtonGrid extends Component {
  render() {
    return (
      <Fragment>
        {[
          [
            { name: "sound", textColor: "secondary" },
            { name: "pattern" },
            {
              name: "bpm",
              function: () => {
                if (synthStore.bpm === 80) {
                  synthStore.bpm = 120;
                } else if (synthStore.bpm === 120) {
                  synthStore.bpm = 140;
                } else {
                  synthStore.bpm = 80;
                }
              }
            },
            { name: "A", type: "knob" },
            {
              name: "B",
              type: "knob",
              maxValue: 180,
              minValue: 60,
              defaultValue: 100,
              setValue: (value: number) => {
                synthStore.bpm = value;
              }
            }
          ],
          [
            { name: "1", icon: <PO28Button1Icon /> },
            { name: "2", icon: <PO28Button2Icon /> },
            { name: "3", icon: <PO28Button3Icon /> },
            { name: "4", icon: <PO28Button4Icon /> },
            { name: "glide", textColor: "secondary", stripedBackground: true }
          ],
          [
            { name: "5", icon: <PO28Button5Icon /> },
            { name: "6", icon: <PO28Button6Icon /> },
            { name: "7", icon: <PO28Button7Icon /> },
            { name: "8", icon: <PO28Button8Icon /> },
            { name: "FX", stripedBackground: true }
          ],
          [
            { name: "9", icon: <PO28Button9Icon /> },
            { name: "10", icon: <PO28Button10Icon /> },
            { name: "11", icon: <PO28Button11Icon /> },
            { name: "12", icon: <PO28Button12Icon /> },
            {
              name: "play",
              function: () => {
                if (Tone.Transport.state === "started") {
                  Tone.Transport.pause();
                } else {
                  Tone.Transport.start();
                }
              }
            }
          ],
          [
            { name: "13", icon: <PO28Button13Icon /> },
            { name: "14", icon: <PO28Button14Icon /> },
            { name: "15", icon: <PO28Button15Icon /> },
            { name: "16", icon: <PO28Button16Icon /> },
            { name: "write", stripedBackground: true }
          ]
        ].map((row, irow) => {
          return (
            <Grid container justify="space-around" key={`row ${irow}`}>
              {row.map((button, icol) => {
                return (
                  <Grid item key={`col ${icol}`}>
                    {button.type === "knob" ? (
                      <POKnob {...button} />
                    ) : (
                      <POButton
                        lightOn={
                          button.name === synthStore.progress.toString()
                            ? true
                            : false
                        }
                        {...button}
                      />
                    )}
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Fragment>
    );
  }
}
