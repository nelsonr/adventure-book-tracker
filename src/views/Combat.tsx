import { ChangeEvent } from "react";
import Box from "../components/Box";
import { Enemy } from "../components/Enemy";
import Group from "../components/Group";
import Separator from "../components/Separator";
import "./Combat.scss";

interface CombatProps {
    state: GameState;
    onEnemyChange: (enemy: Enemy) => unknown;
    onPlayerStaminaChange: (value: number) => unknown;
}

export default function Combat (props: CombatProps) {
    const {
        state,
        onEnemyChange,
        onPlayerStaminaChange
    } = props;

    const enemies = state.enemies.map((enemy) =>
        <Enemy
            key={enemy.id}
            enemy={enemy}
            onEnemyChange={(updatedEnemy: Enemy) => onEnemyChange(updatedEnemy)}
        />
    );

    const onPlayerStaminaInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onPlayerStaminaChange(Number(ev.target.value))
    }

    return (
        <div className="combat">
            <Box>
                <Group isVertical={true} noGap={true}>
                    <h2>Player</h2>

                    <Group>
                        <div>
                            <label htmlFor="player-skill">Skill</label>
                            <input type="number" id="player-skill" name="player-skill" value={state.stats.skill.value} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="player-stamina">Stamina</label>
                            <input
                                type="number"
                                id="player-stamina"
                                name="player-stamina"
                                value={state.stats.stamina.value}
                                onChange={onPlayerStaminaInputChange}
                            />
                        </div>
                    </Group>
                </Group>
            </Box>

            <Separator size={"s"} hideLine={true} />

            <Group fill={true} wrap={true}>
                {enemies}
            </Group>
        </div>
    )
}
