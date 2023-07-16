import { getClassName } from '../Utils';
import './Separator.scss';

interface SeparatorProps {
    size: "xs" | "s" | "base" | "m" | "l" | "xl";
    showLine?: boolean;
}

export default function Separator (props: SeparatorProps) {
    const { size, showLine } = props;

    const className = getClassName([
        "separator",
        "separator--" + size,
        (showLine == undefined || showLine ? "" : "separator--hide-line")
    ]);

    return (
        <div className={className}></div>
    )
}
