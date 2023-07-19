import { useEffect, useReducer, useState } from 'react'
import { loadStorage, updateStorage } from './Storage'
import { GameReducer } from './GameReducer'
import StatsAndEquipment from './views/StatsAndEquipment'

import './App.scss'
import { Tabs, TabsBody, TabsHeader, TabsItem } from './components/Tabs'
import Combat from './views/Combat'

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
    },
    enemies: [
        { id: 0, skill: 0, stamina: 0 },
        { id: 1, skill: 0, stamina: 0 },
        { id: 2, skill: 0, stamina: 0 },
        { id: 3, skill: 0, stamina: 0 },
        { id: 4, skill: 0, stamina: 0 },
        { id: 5, skill: 0, stamina: 0 },
    ]
};

function App () {
    const [activeTab, setActiveTab] = useState(0);
    const [state, dispatch] = useReducer(GameReducer, initialState, (initialState) => {
        const storeData = loadStorage<GameState>();

        if (!storeData) {
            return initialState;
        }

        return Object.assign(initialState, storeData);
    });

    useEffect(() => {
        updateStorage(state);
    }, [state])

    const onInitialValueChange = (statName: string) => {
        return (value: string | number) => dispatch({ type: "updateInitialStat", statName, value });
    };

    const onStatChange = (statName: string) => {
        return (value: string | number) => dispatch({ type: "updateStat", statName, value });
    };

    const onEnemyChange = (enemy: Enemy) => {
        return dispatch({ type: "updateEnemy", enemy });
    };

    return (
        <main>
            <Tabs>
                <TabsHeader>
                    <TabsItem isActive={activeTab === 0} onClick={() => setActiveTab(0)}><h1>Stats</h1></TabsItem>
                    <TabsItem isActive={activeTab === 1} onClick={() => setActiveTab(1)}><h1>Combat</h1></TabsItem>
                </TabsHeader>
                <TabsBody>
                    <TabsItem isActive={activeTab === 0}>
                        <StatsAndEquipment
                            state={state.stats}
                            onInitialStatChange={onInitialValueChange}
                            onStatChange={onStatChange}
                        />
                    </TabsItem>
                    <TabsItem isActive={activeTab === 1}>
                        <Combat state={state} onEnemyChange={onEnemyChange} />
                    </TabsItem>
                </TabsBody>
            </Tabs>

            {/* Rough edges SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0" >
                <defs>
                    <filter id="squiggle">
                        <feTurbulence
                            type="fractalNoise"
                            id="turbulence"
                            baseFrequency=".01"
                            numOctaves="1"
                        />
                        <feDisplacementMap
                            id="displacement"
                            in="SourceGraphic"
                            scale="2"
                        />
                    </filter>
                </defs>
            </svg>
        </main>
    );
}

export default App
