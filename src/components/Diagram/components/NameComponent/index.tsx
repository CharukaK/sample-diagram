
import { Shape } from "../../../../util/types";

import './style.css'

interface NameComponentProps {
    model: Shape;
}

export function NameComponent(props: NameComponentProps) {
    const { model } = props;

    const shapeName = model.viewState.shapeName;


    return (
        <text x={shapeName.x} y={shapeName.y} className={'small'} >{model.name}</text>
    )
}