import { Visitor } from "../util/base-visitor";
import { Circle, Square } from "../util/types";
import { CircleViewState } from "../util/viewstates/circle-viewstate";
import { ShapeViewState } from "../util/viewstates/shape-viewstate";
import { SquareViewState } from "../util/viewstates/square-viewstate";
import { COMPONENT_GAP } from "./sizing-visitor";

export class PositionVisitor implements Visitor {

    beginVisitCircle(el: Circle) {
        if (el.viewState) {
            const viewState: CircleViewState = el.viewState as CircleViewState;
            const shapeName = viewState.shapeName;
            shapeName.x = 10;
            shapeName.y = 10;
            viewState.bBox.cx = viewState.bBox.r;
            viewState.bBox.cy = viewState.bBox.r + shapeName.h;
            viewState.bBox.x = shapeName.h;
            viewState.bBox.y = 0;

            let height = viewState.bBox.x + COMPONENT_GAP;
            el.children.forEach((child, index) => {
                const childVS: ShapeViewState = child.viewState as ShapeViewState;

                childVS.shapeName.y = height;
                childVS.shapeName.x = viewState.bBox.r - (childVS.bBox.w / 2);

                childVS.bBox.x = viewState.bBox.r - (childVS.bBox.w / 2);
                childVS.bBox.y = height + childVS.shapeName.h;

                // set worker line positions
                switch (index) {
                    case 0:
                        viewState.workerLine.x1 = viewState.bBox.r;
                        viewState.workerLine.y1 = height + childVS.shapeName.h;
                        break;
                    case el.children.length - 1:
                        viewState.workerLine.x2 = viewState.bBox.r;
                        viewState.workerLine.y2 = height + childVS.shapeName.h;
                        break;
                    default:
                }


                height += childVS.bBox.h + COMPONENT_GAP + childVS.shapeName.h;
            })
        }
    }

    beginVisitSquare(el: Square) {
        if (el.viewState) {
            const viewState: SquareViewState = el.viewState as SquareViewState;

            let height = viewState.bBox.y + COMPONENT_GAP;
            el.children.forEach((child, index) => {
                const childVS: ShapeViewState = child.viewState as ShapeViewState;

                childVS.shapeName.y = height;
                childVS.shapeName.x = viewState.bBox.x + viewState.bBox.w / 2 - childVS.bBox.w / 2;

                childVS.bBox.x = viewState.bBox.x + viewState.bBox.w / 2 - childVS.bBox.w / 2;
                childVS.bBox.y = height + childVS.shapeName.h;

                // set worker line positions
                switch (index) {
                    case 0:
                        viewState.workerLine.x1 = viewState.bBox.x + viewState.bBox.w / 2;
                        viewState.workerLine.y1 = height + childVS.shapeName.h;
                        break;
                    case el.children.length - 1:
                        viewState.workerLine.x2 = viewState.bBox.x + viewState.bBox.w / 2;
                        viewState.workerLine.y2 = height + childVS.shapeName.h;
                        break;
                    default:
                }


                height += childVS.bBox.h + COMPONENT_GAP + childVS.shapeName.h;
            })
        }
    }
}
