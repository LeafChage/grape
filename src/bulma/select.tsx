import { FC, HTMLProps, } from "react"

export const Select: FC<
    { options: string[], } &
    HTMLProps<HTMLSelectElement>
> = (props) => {
    return <span className="select">
        <select {...props}>
            {props.options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
    </span>
}
