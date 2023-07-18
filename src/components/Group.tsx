import { getClassName } from '../Utils';
import './Group.scss';

interface GroupProps {
    children: JSX.Element | JSX.Element[];
    isVertical?: boolean;
    noGap?: boolean;
    fill?: boolean;
    alignCenter?: boolean;
}

export default function Group (props: GroupProps) {
    const { children, isVertical, noGap, fill, alignCenter } = props;

    const className = getClassName([
        "group",
        (isVertical ? "group--is-vertical" : ""),
        (noGap ? "group--no-gap" : ""),
        (fill ? "group--fill" : ""),
        (alignCenter ? "group--align-center" : "")
    ]);

    return (
        <div className={className}>{children}</div>
    )
}
