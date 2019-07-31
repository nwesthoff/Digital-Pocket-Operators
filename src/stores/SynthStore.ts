import { observable, reaction } from "mobx";
import Tone, {
  Synth,
  Sequence,
  NoteArray,
  LFO,
  LowpassCombFilter,
  Encoding
} from "tone";
import { Theme } from "@material-ui/core";
import { POThemes } from "../config/Theme";

export class SynthStore {
  constructor() {
    Tone.Context.latencyHint = "playback";

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

    reaction(
      () => this.synthFilterCutoff,
      () => {
        this.LFO.max = this.synthFilterCutoff + 500;
        this.LFO.min = this.synthFilterCutoff - 500;
      },
      { fireImmediately: true }
    );

    reaction(
      () => this.synthFilterResonance,
      () => {
        this.filter.resonance.value = this.synthFilterResonance;
      },
      { fireImmediately: true }
    );

    this.synths.map((synth, i: number) => {
      synth.oscillator.type = "sine";
      this.LFO.connect(this.filter.dampening).start();

      let gainValue = 0.6;
      if (i === 1) {
        gainValue = 0.8;
      }

      const gain = new Tone.Gain(gainValue);
      synth.chain(this.filter, gain, Tone.Master);
    });

    this.sequence.start();
  }

  @observable
  theme: Theme = POThemes.ThemePO28.theme;

  @observable
  selectedNote: Encoding.Note = "A4";

  @observable
  modifiers = {
    bpm: false,
    write: false,
    holdwrite: false,
    sound: false,
    pattern: false,
    fx: false,
    glide: false
  };

  @observable
  bpm: number = 120;

  @observable
  swing: number = 0;

  @observable
  synthFilterCutoff: number = 0;
  @observable
  synthFilterResonance: number = 0.5;

  @observable
  filter: LowpassCombFilter = new Tone.LowpassCombFilter(0, 0.5, 3000);

  @observable
  LFO: LFO = new Tone.LFO({
    type: "sine",
    min: 500,
    max: 1000,
    frequency: "16n",
    amplitude: 1
  });

  @observable
  synths: Synth[] = [new Tone.FMSynth(), new Tone.FMSynth()];

  @observable
  progress: number = 0;

  @observable
  sequence: Sequence = new Tone.Sequence(
    (time, note) => {
      synthStore.progress =
        synthStore.progress < 16 ? synthStore.progress + 1 : 1;
      synthStore.synths[0].triggerAttackRelease(note, "16n", time);
    },
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    "16n"
  );
}

export const synthStore = ((window as any).synthStore =
  (window as any).synthStore || new SynthStore()) as SynthStore;
