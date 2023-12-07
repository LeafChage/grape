import { FC } from "react"

export const Select: FC<{
    values: string[],
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}> = (props) => {
    return <span className="select">
        <select onChange={props.onChange}>
            {
                props.values.map(value => <option key={value}>{value}</option>)
            }
        </select>
    </span>
}
