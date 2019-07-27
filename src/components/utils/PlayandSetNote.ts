import { synthStore } from "../../stores/SynthStore";

export const PlayandSetNote = (note: string, index: number) => {
  synthStore.synths[1].triggerAttackRelease(note, "16n");
  if (synthStore.writemode) {
    synthStore.sequence.at(index, note);
  }
};
