import { getClassName } from '../Utils';
import './Box.scss';

interface BoxProps {
    children?: JSX.Element | JSX.Element[] | string;
}

export default function Box (props: BoxProps) {
    const { children } = props;

    const className = getClassName([
        "box",
    ]);

    return (
        <div className={className}>{children}</div>
    )
}
