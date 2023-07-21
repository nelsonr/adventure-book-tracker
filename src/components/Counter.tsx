import { ChangeEvent, useEffect, useState } from 'react';
import { cond, setClassName } from '../Utils';
import Button from './Button';
import Group from './Group';
import './Counter.scss';

interface CounterProps {
    initialValue: number;
    minValue?: number;
    maxValue?: number;
    enableInput?: boolean;
    onChange: (value: number) => unknown;
}

export default function Counter (props: CounterProps) {
    const { minValue, maxValue, initialValue, enableInput, onChange } = props;
    const [value, setValue] = useState(initialValue);

    const className = setClassName(["counter"]);

    const onDecrement = () => setValue(cond(!!minValue && value <= minValue, Number(minValue), value - 1))
    const onIncrement = () => setValue(cond(!!maxValue && value >= maxValue, Number(maxValue), value + 1))
    const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => setValue(Number(ev.target.value));

    useEffect(() => {
        onChange(value)
    }, [onChange, value])

    return (
        <div className={className}>
            <Group wrap={false}>
                <Button onClick={onDecrement}>-</Button>
                <input type="number" name="counter" value={value.toString()} onChange={onInputChange} />
                <Button onClick={onIncrement}>+</Button>
            </Group>
        </div>
    )
}
