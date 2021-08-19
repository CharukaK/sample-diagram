import { Visitor } from "../util/base-visitor";
import { Circle, Shape, Square } from "../util/types";
import { CircleViewState } from "../util/viewstates/circle-viewstate";
import { ShapeViewState } from "../util/viewstates/shape-viewstate";
import { SquareViewState } from "../util/viewstates/square-viewstate";

export const DEFAULT_SQUARE_SIDE = 40;
export const SQUARE_GAP = 10;

export class SizingVisitor implements Visitor {

    beginVisitSquare(el: Square) {
        if (el.viewState) {
            const viewState: SquareViewState = el.viewState as SquareViewState;

            viewState.bBox.h = DEFAULT_SQUARE_SIDE;
            viewState.bBox.w = DEFAULT_SQUARE_SIDE;
        }
    }

    endVisitCircle(el: Circle) {
        if (el.viewState) {
            const viewState: CircleViewState = el.viewState as CircleViewState;

            if (el.children.length === 0) {
                viewState.bBox.r = DEFAULT_SQUARE_SIDE;
            } else {
                let height = SQUARE_GAP;
                el.children.forEach((child: Shape) => {
                    const childVS: ShapeViewState = child.viewState as ShapeViewState;
                    height += childVS.bBox.h + SQUARE_GAP;
                });

                viewState.bBox.r = height/2;
            }
        }
    }
}
