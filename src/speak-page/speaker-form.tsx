import { useContext } from "react"
import { LangVoiceSelecter } from "./lang-voice-selecter"
import { TextTextArea } from "./text-textarea"
import { SpeakerContext } from "./speaker-context"
import { SpeakerFormContext } from "./speaker.context"

export const SpeakerForm = () => {
    const api = useContext(SpeakerContext)!;
    const { voice: voiceName, text } = useContext(SpeakerFormContext)

    const speak = () => {
        const voice = api.getVoice(voiceName?.v ?? "")
        if (voice !== undefined && text?.v !== undefined) {
            api.speak({ text: text.v, voice });
        }
    }

    return <>
        <LangVoiceSelecter />
        <TextTextArea />
        <button className="button" onClick={speak}>Speak</button>
    </>
}
