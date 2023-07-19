import { Enemy } from "../components/Enemy";
import Group from "../components/Group";
import "./Combat.scss";

interface CombatProps {
    state: GameState;
    onEnemyChange: (enemy: Enemy) => unknown;
}

export default function Combat (props: CombatProps) {
    const {
        state,
        onEnemyChange
    } = props;

    const enemies = state.enemies.map((enemy) =>
        <Enemy
            key={enemy.id}
            enemy={enemy}
            onEnemyChange={(updatedEnemy: Enemy) => onEnemyChange(updatedEnemy)}
        />
    )

    return (
        <div className="combat">
            <Group fill={true} wrap={true}>
                {enemies}
            </Group>
        </div>
    )
}
