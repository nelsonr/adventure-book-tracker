import { getClassName } from '../Utils';
import './Icon.scss';

interface IconProps {
    name: string;
}

export default function Icon (props: IconProps) {
    const { name } = props;

    const className = getClassName([
        "icon",
    ]);

    return (
        <i className={className}></i>
    )
}
