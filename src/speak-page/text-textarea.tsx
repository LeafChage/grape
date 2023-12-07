import { useSpakerInputState } from "./speaker.context";

export const TextTextArea = () => {
    const { text } = useSpakerInputState();
    return <textarea className="textarea" onChange={(e) => text.fn(e.target.value)}></textarea>
}
