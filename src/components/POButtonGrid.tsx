import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import POButton from "./controls/POButton";
import POKnob from "./controls/POKnob";

export default class POButtonGrid extends Component {
  render() {
    return (
      <Fragment>
        {[
          [
            { name: "sound" },
            { name: "pattern" },
            { name: "bpm" },
            { name: "A", type: "knob" },
            { name: "B", type: "knob" }
          ],
          [
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "key" }
          ],
          [
            { name: "5" },
            { name: "6" },
            { name: "7" },
            { name: "8" },
            { name: "style" }
          ],
          [
            { name: "9" },
            { name: "10" },
            { name: "11" },
            { name: "12" },
            { name: "play" }
          ],
          [
            { name: "13" },
            { name: "14" },
            { name: "15" },
            { name: "16" },
            { name: "write" }
          ]
        ].map((row, irow) => {
          return (
            <Grid container justify="space-around" key={`row ${irow}`}>
              {row.map((button, icol) => {
                return (
                  <Grid item key={`col ${icol}`}>
                    {button.type === "knob" ? (
                      <POKnob />
                    ) : (
                      <POButton name={button.name} />
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
