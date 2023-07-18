type Action =
    | { type: "update"; propName: string; value: string | number; }

export function GameReducer (state: GameState, action: Action): GameState {
    switch (action.type) {
        case "update":
            return updateProperty(state, action.propName, action.value);

        default:
            return state;
    }
}

function updateProperty (state: GameState, propName: string, value: string | number): GameState {
    return {
        ...state,
        [propName]: {
            ...state[propName],
            value: value
        }
    };
}
