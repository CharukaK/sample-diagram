import { Visitor } from "../util/base-visitor";
import { Circle } from "../util/types";
import { CircleViewState } from "../util/viewstates/circle-viewstate";
import { ShapeViewState } from "../util/viewstates/shape-viewstate";
import { SQUARE_GAP } from "./sizing-visitor";

export class PositionVisitor implements Visitor {
    private height: number = 0;

    beginVisitCircle(el: Circle) {
        let height = 0;

        const viewState: CircleViewState = el.viewState as CircleViewState;
        viewState.bBox.x = viewState.bBox.r + 5;
        viewState.bBox.y = viewState.bBox.r + 5;

        height += SQUARE_GAP;

        el.children.forEach(child => {

            const childVS = child.viewState as ShapeViewState;
            childVS.bBox.x = viewState.bBox.r - childVS.bBox.w/3;
            childVS.bBox.y = height + childVS.bBox.w/3;

            height += SQUARE_GAP;

            height += childVS.bBox.h;
        });
    }
}
