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

export const useSpeakerLanguages = (): [string[], () => void] => {
    const api = useContext(SpeakerContext);
    const [languages, updateLanguages] = useState<string[]>([]);
    return [languages, () => updateLanguages(api?.getLanguages() ?? [])];
}

export const useSpeakerVoices = (lang: string): [SpeechSynthesisVoice[], () => void] => {
    const api = useContext(SpeakerContext);
    const [voices, updateVoices] = useState<SpeechSynthesisVoice[]>([]);

    const update = () => { updateVoices(api?.getVoices(lang) ?? []) }
    useEffect(update, [lang]);

    return [voices, update];
}

