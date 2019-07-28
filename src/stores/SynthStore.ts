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

    reaction(
      () => this.swing,
      () => {
        Tone.Transport.swing = this.swing;
      },
      { fireImmediately: true }
    );

    this.synths.map((synth, i: number) => {
      synth.oscillator.type = "sawtooth";
      let gainValue = 0.6;
      if (i === 1) {
        gainValue = 0.8;
      }
      const gain = new Tone.Gain(gainValue);
      gain.toMaster();
      console.log(Tone.Master.volume.value);
      synth.connect(gain);
    });

    this.sequence.start();
  }

  @observable
  theme: Theme = POThemes.ThemePO28.theme;

  @observable
  bpm: number = 120;

  @observable
  swing: number = 0;
  @observable
  writemode: boolean = false;

  @observable
  holdbpm: boolean = false;
  @observable
  synths: Synth[] = [new Tone.FMSynth(), new Tone.FMSynth()];

  @observable
  notes: NoteArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];

  @observable
  progress: number = 0;

  @observable
  sequence: Sequence = new Tone.Sequence(
    (time, note) => {
      synthStore.progress =
        synthStore.progress < 16 ? synthStore.progress + 1 : 1;
      synthStore.synths[0].triggerAttackRelease(note, "16n", time);
    },
    this.notes,
    "16n"
  );
}

export const synthStore = ((window as any).synthStore =
  (window as any).synthStore || new SynthStore()) as SynthStore;
