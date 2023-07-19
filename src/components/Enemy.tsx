import { getClassName } from '../Utils';
import Box from './Box';
import './Enemy.scss';
import { ChangeEvent } from 'react';
import Separator from './Separator';

interface EnemyProps {
    enemy: Enemy;
    onEnemyChange: (enemy: Enemy) => unknown;
}

export function Enemy (props: EnemyProps) {
    const { enemy, onEnemyChange } = props;

    const className = getClassName([
        "enemy",
    ]);

    const onSkillChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onEnemyChange({
            id: enemy.id,
            skill: Number(ev.target.value),
            stamina: enemy.stamina
        })
    }

    const onStaminaChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onEnemyChange({
            id: enemy.id,
            skill: enemy.skill,
            stamina: Number(ev.target.value)
        })
    }

    return (
        <Box>
            <div className={className}>
                <div className="stats-item__title">Enemy</div>

                <label htmlFor={"enemy-skill-" + enemy.id}>Skill</label>
                <input
                    id={"enemy-skill-" + enemy.id}
                    className="stats-item__value"
                    type='number'
                    value={enemy.skill.toString()}
                    onChange={onSkillChange}
                />

                <Separator size={'s'} hideLine={true} />

                <label htmlFor={"enemy-stamina-" + enemy.id}>Stamina</label>
                <input
                    id={"enemy-stamina-" + enemy.id}
                    className="stats-item__value"
                    type='number'
                    value={enemy.stamina.toString()}
                    onChange={onStaminaChange}
                />
            </div>
        </Box >
    )
}
