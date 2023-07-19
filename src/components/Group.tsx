import { getClassName } from '../Utils';
import './Group.scss';

interface GroupProps {
    children: JSX.Element | JSX.Element[] | string;
    isVertical?: boolean;
    noGap?: boolean;
    fill?: boolean;
    wrap?: boolean;
    alignCenter?: boolean;
}

export default function Group (props: GroupProps) {
    const { children, isVertical, noGap, fill, wrap, alignCenter } = props;

    const className = getClassName([
        "group",
        (isVertical ? "group--is-vertical" : ""),
        (noGap ? "group--no-gap" : ""),
        (fill ? "group--fill" : ""),
        (wrap === true ? "group--wrap" : ""),
        (wrap === false ? "group--no-wrap" : ""),
        (alignCenter ? "group--align-center" : "")
    ]);

    return (
        <div className={className}>{children}</div>
    )
}
