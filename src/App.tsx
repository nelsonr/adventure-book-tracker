import { useEffect, useReducer } from 'react'
import { loadStorage, updateStorage } from './Storage'
import { GameReducer } from './GameReducer'
import StatsAndEquipment from './views/StatsAndEquipment'

import './App.scss'
import { curry } from './Utils'

const initialState: GameState = {
    skill: { title: "Skill", value: 0 },
    stamina: { title: "Stamina", value: 0 },
    luck: { title: "Luck", value: 0 },
    gold: { title: "Gold", value: 0 },
    equipment: { title: "Equipment", value: "" },
    provisions: { title: "Provisions", value: "" },
    jewels: { title: "Jewels", value: "" },
    potions: { title: "Potions", value: "" },
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

    const onChange = curry((propName: string) => {
        return (value: string | number) => dispatch({ type: "update", propName, value });
    });

    return (
        <StatsAndEquipment
            state={state}
            onChange={onChange}
        />
    )
}

export default App
