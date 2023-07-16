import { useEffect, useState } from 'react';
import { cond, getClassName } from '../Utils';
import Button from './Button';
import Group from './Group';
import './Counter.scss';

interface CounterProps {
    minValue?: number;
    maxValue?: number;
    onChange: (value: number) => unknown;
}

export default function Counter (props: CounterProps) {
    const [value, setValue] = useState(1);
    const { minValue, maxValue, onChange } = props;

    const className = getClassName(["counter"]);

    const onDecrement = () => setValue(cond(!!minValue && value <= minValue, Number(minValue), value - 1))
    const onIncrement = () => setValue(cond(!!maxValue && value >= maxValue, Number(maxValue), value + 1))

    useEffect(() => {
        onChange(value)
    }, [value, onChange])

    return (
        <div className={className}>
            <Group>
                <Button onClick={onDecrement}>-</Button>
                <span>{value}</span>
                <Button onClick={onIncrement}>+</Button>
            </Group>
        </div>
    )
}
