import { SpeakerInputContext } from "./speaker.context"
import { SpeakerForm } from "./speaker-form";

export const SpeakTemplate = () => {
    return <SpeakerInputContext.Provider value={{}}>
        <SpeakerForm />
    </SpeakerInputContext.Provider>
}
