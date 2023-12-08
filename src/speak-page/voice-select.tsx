import { FC } from "react";
import { useSpeakerVoices } from "./speaker-context";
import { Select } from "../bulma/select";

export const VoiceSelect: FC<{
    lang: string
    onChange: (value: string) => void
}> = (props) => {
    const [voices, fn] = useSpeakerVoices(props.lang);
    const values = voices.map(v => v.name);

    return <Select
        options={voices.length > 0 ? values : ["choose voice"]}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        onClick={fn}
    />
}

