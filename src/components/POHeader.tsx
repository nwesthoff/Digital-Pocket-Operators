import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const POHeaderStyled = styled.div`
  margin: 1.2rem 1.2rem 0.6rem 1.2rem;
`;

export default class POHeader extends Component {
  render() {
    return (
      <POHeaderStyled>
        <Typography variant="h4" color="primary">
          robot
        </Typography>
      </POHeaderStyled>
    );
  }
}
