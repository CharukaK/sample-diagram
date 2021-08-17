import React from "react"
import { useAppContext } from "../../context/AppContext"
import { getComponent } from "./util";

export function Diagram() {
    const { state: { model } } = useAppContext();

    const components: JSX.Element[] = [];

    if (model) {
        components.push(getComponent(model.type, { model }));
    }

    return (
        <svg width="400" height="180">
            {components}
        </svg>
    )

}
