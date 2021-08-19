import { Visitor } from "../util/base-visitor";
import { Circle, Shape, Square, Triangle } from "../util/types";
import { CircleViewState } from "../util/viewstates/circle-viewstate";
import { ShapeViewState } from "../util/viewstates/shape-viewstate";
import { SquareViewState } from "../util/viewstates/square-viewstate";
import { TriangleViewState } from "../util/viewstates/triangle-viewstate";

export const DEFAULT_SHAPE_DIMENSION = 100;
export const COMPONENT_GAP = 20;
export const NAME_GAP = 5;
export const NAME_HEIGHT = 13;

export class SizingVisitor implements Visitor {

    beginVisitTriangle(el: Triangle) {
        if (el.viewState) {
            const viewState: TriangleViewState = el.viewState as TriangleViewState;

            viewState.bBox.h = DEFAULT_SHAPE_DIMENSION;
            viewState.bBox.w = DEFAULT_SHAPE_DIMENSION;
        }
    }

    beginVisitSquare(el: Square) {
        if (el.viewState) {
            const viewState: SquareViewState = el.viewState as SquareViewState;

            if (el.children.length > 0) {
                let height = COMPONENT_GAP;

                el.children.forEach(child => {
                    const childVS: ShapeViewState = child.viewState as ShapeViewState;
                    height += childVS.bBox.h + COMPONENT_GAP;
                })

                viewState.bBox.h = height;
                viewState.bBox.w = height;
            } else {
                viewState.bBox.h = DEFAULT_SHAPE_DIMENSION;
                viewState.bBox.w = DEFAULT_SHAPE_DIMENSION;
            }
        }
    }

    endVisitCircle(el: Circle) {
        if (el.viewState) {
            const viewState: CircleViewState = el.viewState as CircleViewState;
            

            if (el.children.length === 0) {
                viewState.bBox.r = DEFAULT_SHAPE_DIMENSION;
            } else {
                let height = COMPONENT_GAP;

                el.children.forEach((child: Shape) => {
                    const childVS: ShapeViewState = child.viewState as ShapeViewState;
                    height += childVS.bBox.h + COMPONENT_GAP;
                });

                viewState.bBox.r = height / 2;
            }
        }
    }
}
