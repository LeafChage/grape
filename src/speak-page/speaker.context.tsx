import { createContext, useState } from "react";

export type SpeakerInput = {
    lang?: string,
    voice?: string,
    text?: string,
}
export const SpeakerInputContext = createContext<SpeakerInput>({})

export const useSpakerInputState = () => {
    return {
        lang: convert(useState<string | undefined>(undefined)),
        voice: convert(useState<string | undefined>(undefined)),
        text: convert(useState<string | undefined>(undefined)),
    }
}

const convert = function <T>(values: [T, (v: T) => void]) {
    return {
        v: values[0],
        fn: values[1]
    }
}
