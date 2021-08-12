import { Visitor } from "./base-visitor";
import { Shape, ShapeType } from "./types";

export class ShapeKindChecker {
    public static isTriangleShape(el: Shape) : boolean {
        return el.type === ShapeType.TRIANGLE;
    }

    public static isCircleShape(el: Shape) : boolean {
        return el.type === ShapeType.CIRCLE;
    }

    public static isSquareShape(el: Shape) : boolean {
        return el.type === ShapeType.SQUARE;
    } 
}

export function traverse(el: Shape, visitor: Visitor): void {
    let beginFunction = (visitor as any)[`beginVisit${el.type}`];

    if (!beginFunction) { // check if specific visitor exist for shape
        beginFunction = visitor.beginVisitShape; // asign the default visit function
    }

    if (beginFunction) {
        beginFunction.bind(visitor)(el);
    }

    const keys = Object.keys(el);

    keys.forEach((key: string) => {
        const childEl: any = (el as any)[key];

        if (Array.isArray(childEl)) { // if the child is a type of collection
            childEl.forEach(obj => { // visit collection children
                if (!obj.type) {
                    return;
                }

                traverse(obj, visitor);
            });
        }

        if (!el.type) {
            return;
        }

        traverse(childEl, visitor);
    });


    let endFunction = (visitor as any)[`endVisit${el.type}`];

    if (!endFunction) { // check if specific visit function exist for the element type
        endFunction = visitor.endVisitShape;
    }

    if (endFunction) {
        endFunction.bind(visitor)(el);
    }
}
