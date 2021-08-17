import React from "react";
import { Circle } from "../util/types";

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
            return { ...state, ...action.payload }
    }
}

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
