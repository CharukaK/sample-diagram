export enum ShapeType {
    CIRCLE = 'Circle',
    TRIANGLE = 'Triangle',
    SQUARE = 'Square',
}

export interface Shape {
    name: string;
    type: string;
}

export interface Circle extends Shape {
    children: Square[];
}

export interface Square extends Shape {
    children: Triangle[];
}

export interface Triangle extends Shape {
    
}
