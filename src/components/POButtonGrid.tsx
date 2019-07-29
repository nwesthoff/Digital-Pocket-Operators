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
import { PlayandSetNote } from "./utils/PlayandSetNote";
import { SetVolume } from "./utils/SetVolume";

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
                synthStore.modifiers.bpm = true;
                const startTime = +new Date();

                const setBPMHandler = () => {
                  const endTime = +new Date();

                  if (endTime - startTime < 200) {
                    if (synthStore.bpm === 80) {
                      synthStore.bpm = 120;
                    } else if (synthStore.bpm === 120) {
                      synthStore.bpm = 140;
                    } else {
                      synthStore.bpm = 80;
                    }
                  }

                  synthStore.modifiers.bpm = false;
                  removeEventListener("touchend", setBPMHandler);
                };

                addEventListener("touchend", setBPMHandler);
              }
            },
            {
              name: "A",
              type: "knob",
              defaultValue: 0,
              setValue: (value: number) => {
                if (synthStore.modifiers.bpm) {
                  synthStore.swing = value / 100;
                } else {
                  synthStore.synthFilterCutoff = value * 50;
                }
              }
            },
            {
              name: "B",
              type: "knob",
              defaultValue: 10,
              setValue: (value: number) => {
                if (synthStore.modifiers.bpm) {
                  synthStore.bpm = (value / 100) * 180 + 60;
                } else {
                  synthStore.synthFilterResonance = (value / 100) * 0.7;
                }
              }
            }
          ],
          [
            {
              name: "1",
              icon: <PO28Button1Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(1);
                } else {
                  PlayandSetNote("A3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "2",
              icon: <PO28Button2Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(2);
                } else {
                  PlayandSetNote("B3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "3",
              icon: <PO28Button3Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(3);
                } else {
                  PlayandSetNote("C3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "4",
              icon: <PO28Button4Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(4);
                } else {
                  PlayandSetNote("D3", synthStore.progress - 1);
                }
              }
            },
            { name: "glide", textColor: "secondary", stripedBackground: true }
          ],
          [
            {
              name: "5",
              icon: <PO28Button5Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(5);
                } else {
                  PlayandSetNote("E3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "6",
              icon: <PO28Button6Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(6);
                } else {
                  PlayandSetNote("F3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "7",
              icon: <PO28Button7Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(7);
                } else {
                  PlayandSetNote("G3", synthStore.progress - 1);
                }
              }
            },
            {
              name: "8",
              icon: <PO28Button8Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(8);
                } else {
                  PlayandSetNote("G#3", synthStore.progress - 1);
                }
              }
            },
            { name: "FX", stripedBackground: true }
          ],
          [
            {
              name: "9",
              icon: <PO28Button9Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(9);
                } else {
                  PlayandSetNote("A4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "10",
              icon: <PO28Button10Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(10);
                } else {
                  PlayandSetNote("B4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "11",
              icon: <PO28Button11Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(11);
                } else {
                  PlayandSetNote("C4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "12",
              icon: <PO28Button12Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(12);
                } else {
                  PlayandSetNote("D4", synthStore.progress - 1);
                }
              }
            },
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
            {
              name: "13",
              icon: <PO28Button13Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(13);
                } else {
                  PlayandSetNote("E4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "14",
              icon: <PO28Button14Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(14);
                } else {
                  PlayandSetNote("F4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "15",
              icon: <PO28Button15Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(15);
                } else {
                  PlayandSetNote("G4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "16",
              icon: <PO28Button16Icon />,
              function: () => {
                if (synthStore.modifiers.bpm === true) {
                  SetVolume(16);
                } else {
                  PlayandSetNote("G#4", synthStore.progress - 1);
                }
              }
            },
            {
              name: "write",
              stripedBackground: true,
              function: () => {
                synthStore.modifiers.write = !synthStore.modifiers.write;
              }
            }
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
