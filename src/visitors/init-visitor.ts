import { Visitor } from "../util/base-visitor";
import { Circle, Shape, Square, Triangle } from "../util/types";
import { CircleViewState } from "../util/viewstates/circle-viewstate";
import { ShapeViewState } from "../util/viewstates/shape-viewstate";
import { SquareViewState } from "../util/viewstates/square-viewstate";
import { TriangleViewState } from "../util/viewstates/triangle-viewstate";

export class InitVisitor implements Visitor {
    beginVisitShape(shape: Shape) {
        if (!shape.viewState) {
            shape.viewState = new ShapeViewState();
        }
    }

    beginVisitCircle(el: Circle) {
        if (!el.viewState) {
            el.viewState = new CircleViewState();
        }
    }

    beginVisitSquare(el: Square) {
        if (!el.viewState) {
            el.viewState = new SquareViewState();
        }
    }

    beginVisitTriangle(el: Triangle) {
        if (!el.viewState) {
            el.viewState = new TriangleViewState();
        }
    }
}

export const initVisitor = new InitVisitor();
