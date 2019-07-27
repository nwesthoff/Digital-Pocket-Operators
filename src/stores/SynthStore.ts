import { observable, reaction } from "mobx";
import Tone, { Synth, Sequence, NoteArray } from "tone";
import { Theme } from "@material-ui/core";
import { POThemes } from "../config/Theme";

export class SynthStore {
  constructor() {
    reaction(
      () => this.bpm,
      () => {
        Tone.Transport.bpm.value = this.bpm;
      },
      { fireImmediately: true }
    );

    this.synths[0].oscillator.type = "sawtooth";
    const gain = new Tone.Gain(0.6);
    gain.toMaster();

    this.synths.map(synth => synth.connect(gain));

    this.sequence.start();
  }

  @observable
  theme: Theme = POThemes.ThemePO28.theme;

  @observable
  bpm: number = 120;

  @observable
  synths: Synth[] = [new Tone.FMSynth()];

  @observable
  notes: NoteArray = [
    "A3",
    "B3",
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "G#3",
    "A4",
    "B4",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "G#4"
  ];

  @observable
  sequence: Sequence = new Tone.Sequence(
    (time, note) => {
      synthStore.synths[0].triggerAttackRelease(note, "16n", time);
    },
    this.notes,
    "16n"
  );
}

export const synthStore = ((window as any).synthStore =
  (window as any).synthStore || new SynthStore()) as SynthStore;
