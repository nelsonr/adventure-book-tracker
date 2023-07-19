type Action =
    | { type: "updateInitialStat"; statName: string; value: string | number; }
    | { type: "updateStat"; statName: string; value: string | number; }
    | { type: "updateEnemy"; enemy: Enemy }

export function GameReducer (state: GameState, action: Action): GameState {
    switch (action.type) {
        case "updateInitialStat":
            return updateInitialValue(state, action.statName, action.value);

        case "updateStat":
            return updateProperty(state, action.statName, action.value);

        case "updateEnemy":
            return updateEnemy(state, action.enemy);

        default:
            return state;
    }
}

function updateStat (state: GameState, statName: string, stat: Stat) {
    return {
        ...state,
        stats: {
            ...state.stats,
            [statName]: stat
        }
    };
}

function updateInitialValue (state: GameState, statName: string, value: string | number): GameState {
    return updateStat(state, statName, {
        ...state.stats[statName],
        initialValue: value,
    });
}

function updateProperty (state: GameState, statName: string, value: string | number): GameState {
    return updateStat(state, statName, {
        ...state.stats[statName],
        value: value
    });
}

function updateEnemy (state: GameState, enemy: Enemy): GameState {
    return {
        ...state,
        enemies: state.enemies.map((currentEnemy) => {
            return currentEnemy.id === enemy.id ? enemy : currentEnemy;
        })
    };
}
