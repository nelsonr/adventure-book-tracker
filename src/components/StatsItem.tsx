import { ChangeEvent, useState } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import './StatsItem.scss';

interface StatsItemProps {
    title: string;
}

export default function Group (props: StatsItemProps) {
    const { title } = props;
    const [value, setValue] = useState(0);

    const className = getClassName([
        "stats-item",
    ]);

    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(ev.target.value));
    }

    return (
        <Box>
            <div className={className}>
                <div className="stats-item__title">{title}</div>
                <input
                    className="stats-item__value"
                    type='number'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </Box>
    )
}
