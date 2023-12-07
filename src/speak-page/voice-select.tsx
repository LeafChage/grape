import { ComponentProps, FC } from "react";
import { useSpeakerVoices } from "./speaker-context";
import { Select } from "../bulma/select";

export const VoiceSelect: FC<
    { lang: string } &
    Pick<ComponentProps<typeof Select>, 'onChange'>
> = (props) => {
    const voices = useSpeakerVoices(props.lang);
    return <Select values={voices.map(v => v.name)} onChange={props.onChange} />
}

