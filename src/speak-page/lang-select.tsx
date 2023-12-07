import { ComponentProps, FC } from "react";
import { Select } from "../bulma/select";
import { useSpeakerLanguages } from "./speaker-context";

export const LangSelect: FC<
    Pick<ComponentProps<typeof Select>, 'onChange'>
> = (props) => {
    const languages = useSpeakerLanguages();
    return <Select values={languages} onChange={props.onChange} />
}

