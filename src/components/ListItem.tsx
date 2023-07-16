import { getClassName } from '../Utils';
import './ListItem.scss';

interface ListItemProps {
    name: string;
    quantity?: number;
    showQuantity?: boolean;
    onClick?: () => unknown;
}

export default function ListItem (props: ListItemProps) {
    const { name, quantity, showQuantity, onClick } = props;

    const className = getClassName([
        "list-item",
        (showQuantity === false ? "list-item--hide-quantity" : "")
    ]);

    return (
        <div className={className} onClick={onClick}>
            <div className="list-item__title">{name}</div>
            <div className="list-item__quantity">{quantity ? "x" + quantity : null}</div>
        </div>
    )
}
