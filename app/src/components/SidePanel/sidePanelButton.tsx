import React, { ReactNode } from "react"
import { Link } from "react-router-dom"

interface SidePanelButtonContent{
    text:string,
    url:string,
    icon?: ReactNode
}
const SidePanelButton:React.FC<SidePanelButtonContent> = (props: SidePanelButtonContent) => {
    return (
        <>
            <div className="flex">
                {props.icon && <span className="mr-3 mt-1">{props.icon}</span>}
                <Link to={props.url} className="block text-black hover:text-gray-800">{props.text}</Link>
            </div>
        </>
    )
}

export default SidePanelButton