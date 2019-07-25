import React, { Component } from "react";
import styled from "styled-components";
import { ThemePO28 } from "../../config/Theme";
import { observable } from "mobx";
import { observer } from "mobx-react";

const ButtonBackground = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonHousing = styled.div`
  width: 50px;
  height: 60px;
  border-radius: 5px;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const POKnobTwist = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${ThemePO28.palette.primary.main};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    height: 70%;
    width: 10px;
    border-radius: 5px;
    background-color: ${ThemePO28.palette.primary.dark};
  }
`;

interface Props {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
}

@observer
export default class POKnob extends Component<Props> {
  @observable
  value: number = this.props.defaultValue || 0;

  minValue: number = this.props.minValue || -50;
  maxValue: number = this.props.maxValue || 50;
  @observable
  firstValue?: number = this.props.defaultValue || -50;

  componentWillUnmount() {
    document.removeEventListener("pointermove", this.handleDrag, false);
    document.removeEventListener("pointerup", this.handlePointerUp, false);
  }

  applySensitivity = (value: number) => {
    return value;
  };

  handlePointerDown = e => {
    e.preventDefault();
    this.firstValue = this.applySensitivity(-e.pageY) - this.value;

    document.addEventListener("pointermove", this.handleDrag);
    document.addEventListener("pointerup", this.handlePointerUp);
  };

  handlePointerUp = () => {
    document.removeEventListener("pointermove", this.handleDrag);
  };

  handleDrag = e => {
    const dy = this.applySensitivity(-e.y) - this.firstValue;

    if (dy < this.minValue) {
      this.value = this.minValue;
    } else if (dy > this.maxValue) {
      this.value = this.maxValue;
    } else {
      this.value = dy;
    }
  };

  render() {
    return (
      <ButtonBackground>
        <ButtonHousing>
          <POKnobTwist
            style={{
              transform: `rotate(${(this.value - this.minValue) *
                (260 / (this.maxValue - this.minValue)) -
                130}deg)`
            }}
            onPointerDown={this.handlePointerDown}
            value={this.value}
          />
        </ButtonHousing>
      </ButtonBackground>
    );
  }
}
