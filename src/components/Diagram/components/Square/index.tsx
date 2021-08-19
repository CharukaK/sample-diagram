import { Square } from "../../../../util/types";
import { getComponent } from "../../util";
import { NameComponent } from "../NameComponent";

interface SquareProps {
    model: Square;
}

export function SquareComponent(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;

    const components: JSX.Element[] = [];

    model.children.forEach(child => {
        components.push(getComponent(child.type, { model: child }));
    })

    return (
        <>
            <rect
                x={viewState.bBox.x}
                y={viewState.bBox.y}
                width={viewState.bBox.w}
                height={viewState.bBox.h}
                fill='#fff'
                stroke="black"
                stroke-width="3"
            />
            {components}
            <NameComponent model={model} />
        </>
    )
}