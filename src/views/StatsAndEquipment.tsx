import Group from "../components/Group";
import List from "../components/List";
import StatsItem from "../components/StatsItem";

interface StatsAndEquipmentProps {
    state: Stats;
    onInitialStatChange: (statName: string) => (value: string | number) => unknown
    onStatChange: (statName: string) => (value: string | number) => unknown
}

export default function StatsAndEquipment (props: StatsAndEquipmentProps) {
    const {
        state,
        onInitialStatChange,
        onStatChange,
    } = props;

    const onSkillChange = onStatChange("skill");
    const onStaminaChange = onStatChange("stamina");
    const onLuckChange = onStatChange("luck");
    const onEquipmentChange = onStatChange("equipment");
    const onProvisionsChange = onStatChange("provisions");
    const onGoldChange = onStatChange("gold");
    const onJewelsChange = onStatChange("jewels");
    const onPotionsChange = onStatChange("potions");

    const onInitialSkillChange = onInitialStatChange("skill");
    const onInitialStaminaChange = onInitialStatChange("stamina");
    const onInitialLuckChange = onInitialStatChange("luck");

    return (
        <Group isVertical={true} fill={true}>
            <Group>
                <StatsItem
                    stat={state.skill}
                    onValueChange={onSkillChange}
                    onInitialValueChange={onInitialSkillChange}
                />
                <StatsItem
                    stat={state.stamina}
                    onValueChange={onStaminaChange}
                    onInitialValueChange={onInitialStaminaChange}
                />
                <StatsItem
                    stat={state.luck}
                    onValueChange={onLuckChange}
                    onInitialValueChange={onInitialLuckChange}
                />
            </Group>

            <Group isVertical={true} fill={true}>
                <Group fill={true}>
                    <Group isVertical={true} fill={true}>
                        <List title={state.equipment.title} value={state.equipment.value as string} onChange={onEquipmentChange} />
                        <List title={state.provisions.title} value={state.provisions.value as string} onChange={onProvisionsChange} />
                    </Group>

                    <Group isVertical={true} fill={true}>
                        <Group isVertical={true}>
                            <StatsItem
                                stat={state.gold}
                                onValueChange={onGoldChange}
                            />
                        </Group>

                        <List title={state.jewels.title} value={state.jewels.value as string} onChange={onJewelsChange} />
                        <List title={state.potions.title} value={state.potions.value as string} onChange={onPotionsChange} />
                    </Group>
                </Group>
            </Group>
        </Group>
    )
}
