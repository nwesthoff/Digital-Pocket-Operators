import { synthStore } from "../../stores/SynthStore";

export const PlayandSetNote = (note: string, index: number) => {
  document.addEventListener("touchend", () => {
    synthStore.synths[1].triggerRelease();
  });

  synthStore.synths[1].triggerAttack(note);

  if (synthStore.modifiers.write) {
    synthStore.sequence.at(index, note);
  }
};
