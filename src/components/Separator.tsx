import { setClassName } from '../Utils';
import './Separator.scss';

interface SeparatorProps {
    size: "xs" | "s" | "base" | "m" | "l" | "xl";
    hideLine?: boolean;
    isVertical?: boolean;
}

export default function Separator (props: SeparatorProps) {
    const { size, hideLine, isVertical } = props;

    const className = setClassName([
        "separator",
        "separator--" + size,
        (hideLine ? "separator--hide-line" : ""),
        (isVertical ? "separator--is-vertical" : "")
    ]);

    return (
        <div className={className}></div>
    )
}
