import { Field } from "../bulma/field"
import { LangSelect } from "./lang-select"
import { VoiceSelect } from "./voice-select"
import { SpeakerFormContext } from "./speaker.context"
import { useContext } from "react"


export const LangVoiceSelecter = () => {
    const { lang, voice } = useContext(SpeakerFormContext);

    return <Field hasAddons>
        <p className="control">
            <LangSelect
                onChange={(v) => lang?.fn(v)}
            />
        </p>
        <p className="control">
            <VoiceSelect
                lang={lang?.v ?? ""}
                onChange={(v) => { voice?.fn(v) }}
            />
        </p>
    </Field>
}
