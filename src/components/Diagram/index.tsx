import React, { useContext } from "react"
import { AppContext, useAppContext } from "../../context/AppContext"
import { ShapeKindChecker } from "../../util/shape-util";
import { Shape } from "../../util/types";
import { getComponent } from "./util";

export function Diagram() {
    const { state: { model } } = useAppContext();

    const components: JSX.Element[] = [];

    let height = 0
    let width = 0;

    if (model) {
        components.push(getComponent(model.type, { model }));

        const viewState = (model as Shape).viewState;

        if (ShapeKindChecker.isCircleShape(model)) {
            height = viewState.bBox.r * 2 + 10;
            width = viewState.bBox.r * 2 + 10;
        } else {
            height = viewState.bBox.h;
            width = viewState.bBox.h;
        }
    }





    return (
        <svg width={width} height={height}>
            {components}
        </svg>
    )

}
