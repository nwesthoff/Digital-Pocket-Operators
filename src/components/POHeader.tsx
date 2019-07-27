import React, { Component } from "react";
import { Typography, Select, MenuItem, Grid } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styled from "styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { POThemes } from "../config/Theme";
import { synthStore } from "../stores/SynthStore";

const POHeaderStyled = styled.div`
  margin: 1.2rem 1.2rem 0 1.2rem;
`;

@observer
export default class POHeader extends Component {
  handleChange = (e, el) => {
    this.value = el.props.name;
    synthStore.theme = POThemes[e.target.value].theme;
  };

  @observable
  value: string = "robot";

  render() {
    return (
      <POHeaderStyled>
        <Grid container>
          <Grid item>
            <Select
              disableUnderline
              renderValue={() => {
                return (
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="h3" color="primary">
                        {this.value}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <KeyboardArrowDownIcon
                        fontSize="large"
                        color="primary"
                        style={{ paddingTop: ".4rem" }}
                      />
                    </Grid>
                  </Grid>
                );
              }}
              value={this.value}
              onChange={this.handleChange}
              variant="outlined"
            >
              {Object.keys(POThemes).map(value => (
                <MenuItem key={value} value={value} name={POThemes[value].name}>
                  {POThemes[value].name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </POHeaderStyled>
    );
  }
}
