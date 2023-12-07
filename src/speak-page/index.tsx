import { FC } from "react";
import { SpeakerContextProvider } from "./speaker-context";
import { SpeakTemplate } from "./template";

export const SpeakPage: FC = () => {
    return <SpeakerContextProvider>
        <SpeakTemplate />
    </SpeakerContextProvider>
}
