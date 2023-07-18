type Action =
    | { type: "updateInitialValue"; propName: string; value: string | number; }
    | { type: "lockInitialValue"; propName: string; }
    | { type: "update"; propName: string; value: string | number; }

export function GameReducer (state: GameState, action: Action): GameState {
    switch (action.type) {
        case "updateInitialValue":
            return updateInitialValue(state, action.propName, action.value);

        case "lockInitialValue":
            return lockInitialValue(state, action.propName);

        case "update":
            return updateProperty(state, action.propName, action.value);

        default:
            return state;
    }
}

function updateInitialValue (state: GameState, propName: string, value: string | number): GameState {
    return {
        ...state,
        stats: {
            ...state.stats,
            [propName]: {
                ...state.stats[propName],
                initialValue: value,
                value: value
            }
        }
    };
}

function lockInitialValue (state: GameState, propName: string): GameState {
    return {
        ...state,
        stats: {
            ...state.stats,
            [propName]: {
                ...state.stats[propName],
                isLocked: !state.stats[propName].isLocked
            }
        }
    };
}

function updateProperty (state: GameState, propName: string, value: string | number): GameState {
    return {
        ...state,
        stats: {
            ...state.stats,
            [propName]: {
                ...state.stats[propName],
                value: value
            }
        }
    };
}
