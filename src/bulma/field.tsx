import { FC, PropsWithChildren } from "react"

export const Field: FC<PropsWithChildren<{
    hasAddons: boolean
}>> = (props) => {
    const className = props.hasAddons ?
        "field has-addons" :
        "field";
    return <div className={className}>
        {props.children}
    </div>
}
