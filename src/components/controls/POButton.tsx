import React, { Component } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { synthStore } from "../../stores/SynthStore";

const ButtonContainer = styled.div`
  position: relative;
`;

const ButtonBackground = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: ${props =>
    props.striped
      ? `repeating-linear-gradient(
          -45deg,
          ${synthStore.theme.palette.primary.dark},
          ${synthStore.theme.palette.primary.dark} 2px,
          transparent 2px,
          transparent 4px,
          ${synthStore.theme.palette.primary.dark} 4px,
          ${synthStore.theme.palette.primary.dark} 6px,
          transparent 6px,
          transparent 8px,
          ${synthStore.theme.palette.primary.dark} 8px,
          ${synthStore.theme.palette.primary.dark} 10px,
          transparent 10px,
          transparent 12px,
          ${synthStore.theme.palette.primary.dark} 12px,
          ${synthStore.theme.palette.primary.dark} 14px,
          transparent 14px,
          transparent 16px,
          ${synthStore.theme.palette.primary.dark} 16px,
          ${synthStore.theme.palette.primary.dark} 18px,
          transparent 18px,
          transparent 20px
        )`
      : synthStore.theme.palette.primary.dark};
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
  textColor?:
    | "initial"
    | "inherit"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error";

  stripedBackground?: boolean;
  function?: VoidFunction;
}

export default class POButton extends Component<Props> {
  handleClick = () => {
    this.props.function();
  };

  render() {
    return (
      <ButtonContainer>
        <ButtonBackground
          striped={this.props.stripedBackground}
          onClick={this.handleClick}
        >
          <ButtonLight on={this.props.lightOn} />
          <ButtonHousing>
            <POButtonClick />
          </ButtonHousing>
        </ButtonBackground>
        <Typography
          variant="body1"
          color={this.props.textColor || "primary"}
          align="center"
        >
          {this.props.name}
        </Typography>
        {this.props.icon ? (
          <ButtonIconBox>{this.props.icon}</ButtonIconBox>
        ) : null}
      </ButtonContainer>
    );
  }
}
