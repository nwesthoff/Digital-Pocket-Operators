import React, { Component } from "react";
import styled from "styled-components";
import { ThemePO28 } from "../../config/Theme";
import { Typography } from "@material-ui/core";

const ButtonContainer = styled.div`
  position: relative;
`;

const ButtonBackground = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${ThemePO28.palette.primary.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonHousing = styled.div`
  width: 45px;
  height: 45px;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLight = styled.div`
  position: absolute;
  top: 10px;
  width: 5px;
  height: 5px;
  background-color: ${props => (props.on ? "red" : "darkred")};
`;

const POButtonClick = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: black;

  &:active {
    background-color: #393939;
  }
`;

const ButtonIconBox = styled.div`
  position: absolute;
  bottom: -1px;
  right: -8px;
`;

interface Props {
  name: string;
  icon?: React.Component;
}

export default class POButton extends Component<Props> {
  render() {
    return (
      <ButtonContainer>
        <ButtonBackground>
          <ButtonLight on={Math.random() > 0.5 ? true : false} />
          <ButtonHousing>
            <POButtonClick />
          </ButtonHousing>
        </ButtonBackground>
        <Typography variant="body2" color="primary" align="center">
          {this.props.name}
        </Typography>
        {this.props.icon ? (
          <ButtonIconBox>{this.props.icon}</ButtonIconBox>
        ) : null}
      </ButtonContainer>
    );
  }
}
