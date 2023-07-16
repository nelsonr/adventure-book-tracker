import { MouseEvent } from 'react';
import { cond, getClassName } from '../Utils';
import './Button.scss';

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string;
    isDisabled?: boolean;
    type?: "button" | "submit";
    onClick?: (ev: MouseEvent<HTMLButtonElement>) => unknown
}

export default function Button (props: ButtonProps) {
    const { children, type, onClick, isDisabled } = props;

    const className = getClassName([
        "button",
        (isDisabled ? "button--is-disabled" : "")
    ]);

    const buttonType = cond(!!type, type, "button");

    return (
        <button
            className={className}
            disabled={isDisabled}
            onClick={onClick}
            type={buttonType}
        >
            <div className="button__inner">{children}</div>
        </button>
    )
}
