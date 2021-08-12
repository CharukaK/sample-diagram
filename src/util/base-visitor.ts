import { Circle, Shape, Square, Triangle } from "./types";

export interface Visitor {
    beginVisitShape(el: Shape): void;
    endVisitShape(el: Shape): void;

    beginVisitCircle(el: Circle, parent?: Shape): void;
    endVisitCircle(el: Circle, parent?: Shape): void;

    beginVisitSquare(el: Square, parent?: Shape): void;
    endVisitSquare(el: Square, parent?: Shape): void;

    beginVisitTriangle(el: Triangle, parent?: Shape): void;
    endVisitTriangle(el: Triangle, parent?: Shape): void;
}
