import React from "react";
import { traverse } from "../util/shape-util";
import { Circle } from "../util/types";
import { initVisitor } from "../visitors/init-visitor";
import { positionVisitor } from "../visitors/position-visitor";
import { sizingVisitor } from "../visitors/sizing-visitor";

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
            traverse(model, initVisitor);
            traverse(model, sizingVisitor);
            traverse(model, positionVisitor);
            return { ...state, ...action.payload }
    }
}

const defaultValue: any = {}

export const AppContext = React.createContext(defaultValue);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = (props: any) => {
    const [state, dispatch] = React.useReducer(reducer, { model: undefined });
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
}

/**
 * 
{
    "name": "circle1",
    "type":"Circle",
    "children":[
        {
            "name": "square1",
            "type":"Square",
            "children":[
                
            ]
        },
        {
            "name": "square2",
            "type":"Square",
            "children":[
                {
                    "name": "triangle1",
                    "type":"Triangle"
                },
                {
                    "name": "triangle2",
                    "type":"Triangle"
                }
            ]
        },
        {
            "type":"Square",
            "children":[
                
            ]
        }
    ]
}
 */
