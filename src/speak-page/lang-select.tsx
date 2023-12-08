import { FC } from "react";
import { Select } from "../bulma/select";
import { useSpeakerLanguages } from "./speaker-context";

export const LangSelect: FC<{
    onChange: (value: string) => void
}> = (props) => {
    const [languages, fn] = useSpeakerLanguages();

    return <Select
        options={languages.length > 0 ? languages : ["choose languages"]}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        onClick={fn}
    />
}

