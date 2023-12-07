import { Field } from "../bulma/field"
import { LangSelect } from "./lang-select"
import { VoiceSelect } from "./voice-select"
import { useSpakerInputState } from "./speaker.context"


export const LangVoiceSelecter = () => {
    const { lang, voice } = useSpakerInputState();

    return <Field hasAddons>
        <p className="control">
            <LangSelect onChange={(e) => lang.fn(e.target.value)} />
        </p>
        <p className="control">
            <VoiceSelect lang={lang.v ?? ""} onChange={(e) => voice.fn(e.target.value)} />
        </p>
    </Field>
}
