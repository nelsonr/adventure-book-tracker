import { useEffect, useReducer } from 'react'
import { loadStorage, updateStorage } from './Storage'
import { GameReducer } from './GameReducer'
import StatsAndEquipment from './views/StatsAndEquipment'

import './App.scss'

const initialState: GameState = {
    version: "0.1.0",
    stats: {
        skill: { title: "Skill", value: 0, initialValue: 0, isLocked: false },
        stamina: { title: "Stamina", value: 0, initialValue: 0, isLocked: false },
        luck: { title: "Luck", value: 0, initialValue: 0, isLocked: false },
        gold: { title: "Gold", value: 0 },
        equipment: { title: "Equipment", value: "" },
        provisions: { title: "Provisions", value: "" },
        jewels: { title: "Jewels", value: "" },
        potions: { title: "Potions", value: "" },
    }
};

function App () {
    const [state, dispatch] = useReducer(GameReducer, initialState, (initialState) => {
        const storeData = loadStorage<GameState>();

        if (!storeData) {
            return initialState;
        }

        return storeData;
    });

    useEffect(() => {
        updateStorage(state);
    }, [state])

    const onInitialValueChange = (propName: string) => {
        return (value: string | number) => dispatch({ type: "updateInitialValue", propName, value });
    };

    const onInitialValueLock = (propName: string) => {
        return () => dispatch({ type: "lockInitialValue", propName });
    };

    const onChange = (propName: string) => {
        return (value: string | number) => dispatch({ type: "update", propName, value });
    };

    return (
        <StatsAndEquipment
            state={state.stats}
            onInitialValueChange={onInitialValueChange}
            onInitialValueLock={onInitialValueLock}
            onChange={onChange}
        />
    )
}

export default App
