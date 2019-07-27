import React, { Component } from "react";
import styled from "styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { synthStore } from "../../stores/SynthStore";

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
  background-color: ${props => props.mainColor};
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
    background-color: ${props => props.darkColor};
  }
`;

interface Props {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  setValue?: (value: number) => {};
}

@observer
export default class POKnob extends Component<Props> {
  @observable
  value: number = this.props.defaultValue || 0;

  minValue: number = this.props.minValue || 0;
  maxValue: number = this.props.maxValue || 100;
  @observable
  firstValue?: number = this.props.defaultValue || 0;

  componentWillUnmount() {
    document.removeEventListener("touchmove", this.handleDrag, false);
    document.removeEventListener("touchend", this.handlePointerUp, false);
  }

  applySensitivity = (value: number) => {
    return value / 4;
  };

  startHandler = e => {
    this.firstValue = this.applySensitivity(-e.touches[0].clientY) - this.value;

    document.addEventListener("touchmove", this.handleDrag);
    document.addEventListener("touchend", this.handlePointerUp);
  };

  handlePointerUp = () => {
    document.removeEventListener("touchmove", this.handleDrag);
  };

  handleDrag = e => {
    const dy = this.applySensitivity(-e.touches[0].clientY) - this.firstValue;

    if (dy < this.minValue) {
      this.value = this.minValue;
    } else if (dy > this.maxValue) {
      this.value = this.maxValue;
    } else {
      this.value = dy;
      this.props.setValue(Math.round(dy));
    }
  };

  render() {
    return (
      <ButtonBackground>
        <ButtonHousing>
          <POKnobTwist
            mainColor={synthStore.theme.palette.primary.main}
            darkColor={synthStore.theme.palette.primary.dark}
            style={{
              transform: `rotate(${(this.value - this.minValue) *
                (260 / (this.maxValue - this.minValue)) -
                130}deg)`
            }}
            onTouchStart={this.startHandler}
            value={this.value}
          />
        </ButtonHousing>
      </ButtonBackground>
    );
  }
}
