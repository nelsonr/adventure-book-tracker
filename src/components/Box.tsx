import { setClassName } from '../Utils';
import './Box.scss';

interface BoxProps {
    children?: JSX.Element | JSX.Element[] | string;
}

export default function Box (props: BoxProps) {
    const { children } = props;

    const className = setClassName([
        "box",
    ]);

    return (
        <div className={className}>{children}</div>
    )
}
