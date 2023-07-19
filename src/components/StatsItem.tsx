import { ChangeEvent } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import Group from './Group';
import './StatsItem.scss';

interface StatsItemProps {
    stat: Stat;
    onInitialValueChange?: (value: number) => unknown;
    onValueChange: (value: number) => unknown;
}

export default function StatsItem (props: StatsItemProps) {
    const { stat, onValueChange: onChange, onInitialValueChange } = props;

    const className = getClassName([
        "stats-item",
        (stat.isLocked ? "stats-item--is-locked" : "")
    ]);

    const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(ev.target.value));
    }

    if (stat.initialValue !== undefined && onInitialValueChange) {
        const onInitialInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
            onInitialValueChange(Number(ev.target.value));
        }

        return (
            <Box>
                <div className={className}>
                    <div className="stats-item__title">{stat.title}</div>
                    <Group alignCenter={true} noGap={true}>
                        <input
                            className="stats-item__value"
                            type='number'
                            value={stat.value.toString()}
                            onChange={onInputChange}
                        />

                        <span className='stats-item__separator'>/</span>

                        <input
                            className="stats-item__value"
                            type='number'
                            value={stat.initialValue.toString()}
                            onChange={onInitialInputChange}
                        />
                    </Group>
                </div>
            </Box >
        )
    }

    return (
        <Box>
            <div className={className}>
                <div className="stats-item__title">{stat.title}</div>
                <input
                    className="stats-item__value"
                    type='number'
                    value={stat.value.toString()}
                    onChange={onInputChange}
                />
            </div>
        </Box >
    )
}
