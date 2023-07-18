import Box from "../components/Box";
import Group from "../components/Group";
import List from "../components/List";
import StatsItem from "../components/StatsItem";

interface StatsAndEquipmentProps {
    state: Stats;
    onInitialValueChange: (propName: string) => (value: string | number) => unknown
    onInitialValueLock: (propName: string) => () => unknown;
    onChange: (propName: string) => (value: string | number) => unknown
}

export default function StatsAndEquipment (props: StatsAndEquipmentProps) {
    const {
        state,
        onInitialValueChange,
        onInitialValueLock,
        onChange,
    } = props;

    const onSkillChange = onChange("skill");
    const onStaminaChange = onChange("stamina");
    const onLuckChange = onChange("luck");
    const onEquipmentChange = onChange("equipment");
    const onProvisionsChange = onChange("provisions");
    const onGoldChange = onChange("gold");
    const onJewelsChange = onChange("jewels");
    const onPotionsChange = onChange("potions");

    const onInitialSkillLock = onInitialValueLock("skill");
    const onInitialStaminaLock = onInitialValueLock("stamina");
    const onInitialLuckLock = onInitialValueLock("luck");

    const onInitialSkillChange = onInitialValueChange("skill");
    const onInitialStaminaChange = onInitialValueChange("stamina");
    const onInitialLuckChange = onInitialValueChange("luck");

    return (
        <main>
            <Group isVertical={true} fill={true}>
                <Group>
                    <Box><h1>Stats & Equipment</h1></Box>
                </Group>

                <Group>
                    <StatsItem
                        stat={state.skill}
                        onChange={onSkillChange}
                        onInitialValueChange={onInitialSkillChange}
                        onInitialValueLock={onInitialSkillLock}
                    />
                    <StatsItem
                        stat={state.stamina}
                        onChange={onStaminaChange}
                        onInitialValueChange={onInitialStaminaChange}
                        onInitialValueLock={onInitialStaminaLock}
                    />
                    <StatsItem
                        stat={state.luck}
                        onChange={onLuckChange}
                        onInitialValueChange={onInitialLuckChange}
                        onInitialValueLock={onInitialLuckLock}
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
                                    onChange={onGoldChange}
                                />
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
