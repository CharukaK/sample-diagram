import { Circle, Shape, Square, Triangle } from "./types";

export interface Visitor {
    beginVisitShape?(el: Shape): void;
    endVisitShape?(el: Shape): void;

    beginVisitCircle?(el: Circle): void;
    endVisitCircle?(el: Circle): void;

    beginVisitSquare?(el: Square): void;
    endVisitSquare?(el: Square): void;

    beginVisitTriangle?(el: Triangle): void;
    endVisitTriangle?(el: Triangle): void;
}
