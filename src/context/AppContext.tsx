import React from "react";
import { traverse } from "../util/shape-util";
import { Circle } from "../util/types";
import { InitVisitor } from "../visitors/init-visitor";
import { PositionVisitor } from "../visitors/position-visitor";
import { SizingVisitor } from "../visitors/sizing-visitor";

export interface AppState {
    model: Circle;
}

export enum AppStateMutateActions {
    UPDATE_MODEL
}

export interface AppStateMutateAction {
    type: AppStateMutateActions
    payload: any;
}

const reducer = (state: AppState, action: AppStateMutateAction) => {
    switch (action.type) {
        case AppStateMutateActions.UPDATE_MODEL:
            const model = action.payload.model;
            traverse(model, new InitVisitor());
            traverse(model, new SizingVisitor());
            traverse(model, new PositionVisitor());
            return { ...state, ...action.payload }
    }
}

/**
 * {type: "Circle", children: [
{type: "Square", children: [

]},
{type: "Square", children: [

]}
]}
 */

const defaultValue: any = {}

const AppContext = React.createContext(defaultValue);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, {});
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
}
