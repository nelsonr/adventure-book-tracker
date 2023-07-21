import { ChangeEvent } from 'react';
import { setClassName } from '../Utils';
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

    const className = setClassName([
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

                    <Group alignCenter={true} noGap={true} wrap={false}>
                        <div>
                            <label>Current</label>
                            <input
                                className="stats-item__value"
                                type='number'
                                value={stat.value.toString()}
                                onChange={onInputChange}
                            />
                        </div>

                        <span className='stats-item__separator'>/</span>

                        <div>
                            <label>Initial</label>
                            <input
                                className="stats-item__value"
                                type='number'
                                value={stat.initialValue.toString()}
                                onChange={onInitialInputChange}
                            />
                        </div>
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
