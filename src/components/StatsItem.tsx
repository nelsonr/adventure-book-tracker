import { ChangeEvent } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import './StatsItem.scss';

interface StatsItemProps {
    title: string;
    value: number;
    onChange: (value: number) => unknown;
}

export default function Group (props: StatsItemProps) {
    const { title, value, onChange } = props;

    const className = getClassName([
        "stats-item",
    ]);

    const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(ev.target.value));
    }

    return (
        <Box>
            <div className={className}>
                <div className="stats-item__title">{title}</div>
                <input
                    className="stats-item__value"
                    type='number'
                    value={value.toString()}
                    onChange={onInputChange}
                />
            </div>
        </Box>
    )
}
