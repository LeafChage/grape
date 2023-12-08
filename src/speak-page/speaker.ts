export type SpeakerApi = {
  getVoice: (voiceName: string) => SpeechSynthesisVoice | undefined,
  getVoices: (lang: string) => SpeechSynthesisVoice[],
  getLanguages: () => string[],
  speak: (option: {
    text: string,
    voice: SpeechSynthesisVoice,
  }) => void,
};

export class Speaker implements SpeakerApi {
  public constructor(
    private readonly synth: SpeechSynthesis,
  ) {
  }

  public getVoice = (voiceName: string): SpeechSynthesisVoice | undefined => {
    const voices = this.synth.getVoices();
    return voices.find(voice => voice.name === voiceName);
  }

  public getVoices = (lang: string): SpeechSynthesisVoice[] => {
    const voices = this.synth.getVoices();
    return voices.filter(voice => voice.lang === lang);
  }

  public getLanguages = (): string[] => {
    const voices = this.synth.getVoices();
    const languages = new Set<string>();
    for (const voice of voices) {
      languages.add(voice.lang);
    }
    return Array.from(languages);
  }

  public speak = (option: {
    text: string,
    voice: SpeechSynthesisVoice,
  }) => {
    const utter = new SpeechSynthesisUtterance(option.text);
    utter.voice = option.voice;
    this.synth.speak(utter);
  }
}

