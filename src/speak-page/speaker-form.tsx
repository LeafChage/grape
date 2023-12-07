import { useContext } from "react"
import { LangVoiceSelecter } from "./lang-voice-selecter"
import { TextTextArea } from "./text-textarea"
import { SpeakerContext, useSpeakerVoice } from "./speaker-context"
import { useSpakerInputState } from "./speaker.context"

export const SpeakerForm = () => {
    const api = useContext(SpeakerContext)

    const { voice: voiceName, text } = useSpakerInputState();
    const voice = useSpeakerVoice(voiceName.v ?? "")

    const speak = () => {
        console.log(voice, text.v);
        if (
            voice !== undefined &&
            text.v !== undefined
        ) {
            api?.speak({
                text: text.v,
                voice
            });
        }
    }

    return <>
        <LangVoiceSelecter />
        <TextTextArea />
        <button className="button" onClick={speak}>Speak</button>
    </>
}
