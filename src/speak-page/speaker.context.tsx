import { FC, PropsWithChildren, createContext, useState } from "react";

type UpdatableValue<T> = {
    v: ReturnType<typeof useState<T>>[0]
    fn: ReturnType<typeof useState<T>>[1]
}

export type SpeakerInput = {
    lang?: UpdatableValue<string | undefined>,
    voice?: UpdatableValue<string | undefined>,
    text?: UpdatableValue<string | undefined>,
}

export const SpeakerFormContext = createContext<SpeakerInput>({})

export const SpeakerFormContextProvider: FC<PropsWithChildren> = (props) => {
    const value = {
        lang: convert<string | undefined>(useState<string | undefined>(undefined)),
        voice: convert<string | undefined>(useState<string | undefined>(undefined)),
        text: convert<string | undefined>(useState<string | undefined>(undefined)),
    }
    return <SpeakerFormContext.Provider value={value}>
        {props.children}
    </SpeakerFormContext.Provider>
}

const convert = function <T>(values: ReturnType<typeof useState<T>>): UpdatableValue<T> {
    return {
        v: values[0],
        fn: values[1]
    }
}
