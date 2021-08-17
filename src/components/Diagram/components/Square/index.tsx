import { Square } from "../../../../util/types";

interface SquareProps {
    model: Square;
}

export function SquareComponent(props: SquareProps) {
    const { model } = props;

    const viewState = model.viewState;

    return (
        <rect
            x={viewState.bBox.x}
            y={viewState.bBox.y}
            width={viewState.bBox.w}
            height={viewState.bBox.h}
            fill='#fff'
            stroke="black"
            stroke-width="3"
        />
    )
}