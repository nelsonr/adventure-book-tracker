import Box from "../components/Box";
import Group from "../components/Group";
import List from "../components/List";
import StatsItem from "../components/StatsItem";

interface StatsAndEquipmentProps {
    state: GameState;
    onChange: (propName: string) => (value: string | number) => unknown
}

export default function StatsAndEquipment (props: StatsAndEquipmentProps) {
    const {
        state,
        onChange
    } = props;

    const onSkillChange = onChange("skill");
    const onStaminaChange = onChange("stamina");
    const onLuckChange = onChange("luck");
    const onEquipmentChange = onChange("equipment");
    const onProvisionsChange = onChange("provisions");
    const onGoldChange = onChange("gold");
    const onJewelsChange = onChange("jewels");
    const onPotionsChange = onChange("potions");

    return (
        <main>
            <Group isVertical={true} fill={true}>
                <Group>
                    <Box><h1>Stats & Equipment</h1></Box>
                </Group>

                <Group>
                    <StatsItem title={state.skill.title} value={state.skill.value as number} onChange={onSkillChange} />
                    <StatsItem title={state.stamina.title} value={state.stamina.value as number} onChange={onStaminaChange} />
                    <StatsItem title={state.luck.title} value={state.luck.value as number} onChange={onLuckChange} />
                </Group>

                <Group isVertical={true} fill={true}>
                    <Group fill={true}>
                        <Group isVertical={true} fill={true}>
                            <List title={state.equipment.title} value={state.equipment.value as string} onChange={onEquipmentChange} />
                            <List title={state.provisions.title} value={state.provisions.value as string} onChange={onProvisionsChange} />
                        </Group>

                        <Group isVertical={true} fill={true}>
                            <Group isVertical={true}>
                                <StatsItem title={state.gold.title} value={state.gold.value as number} onChange={onGoldChange} />
                            </Group>

                            <List title={state.jewels.title} value={state.jewels.value as string} onChange={onJewelsChange} />
                            <List title={state.potions.title} value={state.potions.value as string} onChange={onPotionsChange} />
                        </Group>
                    </Group>
                </Group>
            </Group>
        </main>
    )
}
