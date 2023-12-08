import { SpeakerFormContextProvider, } from "./speaker.context"
import { SpeakerForm } from "./speaker-form";

export const SpeakTemplate = () => {
    return <SpeakerFormContextProvider >
        <SpeakerForm />
    </SpeakerFormContextProvider >;
}
