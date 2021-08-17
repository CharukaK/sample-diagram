import * as ShapeComponents from '../components/index';

export function getComponent(type: string, args: any) {
    const ShapeComponent = (ShapeComponents as any)[type];

    if (ShapeComponent) {
        return <ShapeComponent {...args} />
    }

    return <></>;
}
