import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { SpeakerApi, Speaker } from "./speaker";

export const SpeakerContext = createContext<SpeakerApi | undefined>(undefined);

export const SpeakerContextProvider: FC<PropsWithChildren> = (props) => {
    const [api, setApi] = useState<SpeakerApi | undefined>(undefined)

    useEffect(() => {
        setApi(new Speaker(window.speechSynthesis));
    }, [window.speechSynthesis]);

    return <SpeakerContext.Provider value={api}>
        {props.children}
    </SpeakerContext.Provider >
}

export const useSpeakerLanguages = () => {
    const api = useContext(SpeakerContext);
    const [languages, updateLanguages] = useState<string[]>(api?.getLanguages() ?? []);
    useEffect(() => {
        updateLanguages(api?.getLanguages() ?? [])
    }, [api]);
    return languages;
}

export const useSpeakerVoices = (lang: string) => {
    const api = useContext(SpeakerContext);
    const [voices, updateVoices] = useState<SpeechSynthesisVoice[]>(api?.getVoices(lang) ?? []);

    useEffect(() => {
        updateVoices(api?.getVoices(lang) ?? [])
    }, [lang]);
    return voices;
}

export const useSpeakerVoice = (voiceName: string) => {
    const api = useContext(SpeakerContext);
    const [voice, updateVoice] = useState<SpeechSynthesisVoice | undefined>(api?.getVoice(voiceName));

    useEffect(() => {
        updateVoice(api?.getVoice(voiceName));
    }, [voiceName]);
    return voice;
}
