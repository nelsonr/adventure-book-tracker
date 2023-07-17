import { useEffect, useState } from 'react'
import Box from './components/Box'
import Group from './components/Group'
import List from './components/List'
import StatsItem from './components/StatsItem'
import './App.scss'
import { loadStorage, updateStorage } from './Storage'

interface AppState {
    skill: { title: string; value: number; };
    stamina: { title: string; value: number; };
    luck: { title: string; value: number; };
    gold: { title: string; value: number; };
    equipment: { title: string; value: string; };
    provisions: { title: string; value: string; };
    jewels: { title: string; value: string; };
    potions: { title: string; value: string; };
}

function App () {
    const [state, setState] = useState<AppState>(() => {
        const storeData = loadStorage<AppState>();

        if (!storeData) {
            return {
                skill: { title: "Skill", value: 0 },
                stamina: { title: "Stamina", value: 0 },
                luck: { title: "Luck", value: 0 },
                gold: { title: "Gold", value: 0 },
                equipment: { title: "Equipment", value: "" },
                provisions: { title: "Provisions", value: "" },
                jewels: { title: "Jewels", value: "" },
                potions: { title: "Potions", value: "" },
            };
        }

        return storeData;
    });

    const onSkillChange = (value: number) => setState({
        ...state,
        skill: {
            title: state.skill.title,
            value: value
        }
    });

    const onStaminaChange = (value: number) => setState({
        ...state,
        stamina: {
            title: state.stamina.title,
            value: value
        }
    });


    const onLuckChange = (value: number) => setState({
        ...state,
        stamina: {
            title: state.stamina.title,
            value: value
        }
    });

    const onEquipmentChange = (value: string) => setState({
        ...state,
        equipment: {
            title: state.equipment.title,
            value: value
        }
    });

    const onProvisionsChange = (value: string) => setState({
        ...state,
        provisions: {
            title: state.provisions.title,
            value: value
        }
    });

    const onGoldChange = (value: number) => setState({
        ...state,
        gold: {
            title: state.gold.title,
            value: value
        }
    });

    const onJewelsChange = (value: string) => setState({
        ...state,
        jewels: {
            title: state.jewels.title,
            value: value
        }
    });

    const onPotionsChange = (value: string) => setState({
        ...state,
        potions: {
            title: state.potions.title,
            value: value
        }
    });

    useEffect(() => {
        updateStorage(state);
    }, [state])

    return (
        <main>
            <Group isVertical={true} fill={true}>
                <Group>
                    <Box><h1>Stats & Equipment</h1></Box>
                </Group>

                <Group>
                    <StatsItem title={state.skill.title} value={state.skill.value} onChange={onSkillChange} />
                    <StatsItem title={state.stamina.title} value={state.stamina.value} onChange={onStaminaChange} />
                    <StatsItem title={state.luck.title} value={state.luck.value} onChange={onLuckChange} />
                </Group>

                <Group isVertical={true} fill={true}>
                    <Group fill={true}>
                        <Group isVertical={true} fill={true}>
                            <List title={state.equipment.title} value={state.equipment.value} onChange={onEquipmentChange} />
                            <List title={state.provisions.title} value={state.provisions.value} onChange={onProvisionsChange} />
                        </Group>

                        <Group isVertical={true} fill={true}>
                            <Group isVertical={true}>
                                <StatsItem title={state.gold.title} value={state.gold.value} onChange={onGoldChange} />
                            </Group>

                            <List title={state.jewels.title} value={state.jewels.value} onChange={onJewelsChange} />
                            <List title={state.potions.title} value={state.potions.value} onChange={onPotionsChange} />
                        </Group>
                    </Group>
                </Group>
            </Group>
        </main>
    )
}

export default App
