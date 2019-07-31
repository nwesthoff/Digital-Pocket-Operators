import { synthStore } from "../../stores/SynthStore";
import { Encoding } from "tone";
import Tone from "tone";

export const PlayandSetNote = (note: Encoding.Note, index: number) => {
  if (synthStore.modifiers.sound) {
    synthStore.selectedNote = note;
  } else if (synthStore.modifiers.write) {
    if (Tone.Transport.state === "started" && synthStore.modifiers.holdwrite) {
      synthStore.sequence.at(synthStore.progress - 1, note);
    } else {
      synthStore.sequence.at(index, synthStore.selectedNote);
    }
  } else {
    addEventListener("touchend", () => {
      synthStore.synths[1].triggerRelease();
    });

    synthStore.synths[1].triggerAttack(note);
  }
};
