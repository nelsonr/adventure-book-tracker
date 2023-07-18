import { ChangeEvent } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import Button from './Button';
import Separator from './Separator';
import Group from './Group';
import './StatsItem.scss';

interface StatsItemProps {
    stat: Stat;
    onInitialValueChange?: (value: number) => unknown;
    onInitialValueLock?: () => unknown;
    onChange: (value: number) => unknown;
}

export default function StatsItem (props: StatsItemProps) {
    const { stat, onChange, onInitialValueLock, onInitialValueChange } = props;

    const className = getClassName([
        "stats-item",
        (stat.isLocked ? "stats-item--is-locked" : "")
    ]);

    const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(ev.target.value));
    }

    if (stat.initialValue !== undefined) {
        if (!stat.isLocked && onInitialValueChange && onInitialValueLock) {
            const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
                onInitialValueChange(Number(ev.target.value));
            }

            return (
                <Box>
                    <div className={className}>
                        <div className="stats-item__title">{stat.title}</div>
                        <input
                            className="stats-item__value"
                            type='number'
                            value={stat.initialValue.toString()}
                            onChange={onInputChange}
                        />

                        <Separator size={'xs'} />

                        <Button onClick={onInitialValueLock}>Lock Initial Value</Button>
                    </div>
                </Box>
            )
        } else {
            return (
                <Box>
                    <div className={className}>
                        <div className="stats-item__title">{stat.title}</div>
                        <Group alignCenter={true}>
                            <input
                                className="stats-item__value"
                                type='number'
                                value={stat.value.toString()}
                                onChange={onInputChange}
                            />
                            <span className='stats-item__separator'>/</span>
                            <div className="stats-item__initial-value">{stat.initialValue}</div>
                        </Group>
                    </div>
                </Box >
            )
        }
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
