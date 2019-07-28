import Tone from "tone";

export const SetVolume = (value: number) => {
  Tone.Master.volume.value = -2 * (16 - value);
};
