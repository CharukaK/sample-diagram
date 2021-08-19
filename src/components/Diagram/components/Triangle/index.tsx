import { Triangle } from "../../../../util/types";
import { DEFAULT_SHAPE_DIMENSION } from "../../../../visitors/sizing-visitor";

interface TriangleProps {
    model: Triangle;
}

export function TriangleComponent(props: TriangleProps) {
    const { model } = props;

    const viewState = model.viewState;

    return (
        <svg
            x={viewState.bBox.x}
            y={viewState.bBox.y}
            height={DEFAULT_SHAPE_DIMENSION}
            width={DEFAULT_SHAPE_DIMENSION}
        >
            <polygon
                points={`${DEFAULT_SHAPE_DIMENSION / 2},0 0,${DEFAULT_SHAPE_DIMENSION} ${DEFAULT_SHAPE_DIMENSION},${DEFAULT_SHAPE_DIMENSION}`}
                fill='#fff'
                stroke="black"
                stroke-width="3"
            />
        </svg>
    )
}
