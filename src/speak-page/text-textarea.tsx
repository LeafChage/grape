import { useContext } from "react";
import { SpeakerFormContext } from "./speaker.context";

export const TextTextArea = () => {
    const { text } = useContext(SpeakerFormContext);
    return <textarea className="textarea" onChange={(e) => text?.fn(e.target.value)}></textarea>
}
