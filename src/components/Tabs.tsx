import { setClassName } from '../Utils';
import './Tabs.scss';

interface TabsProps {
    children?: JSX.Element | JSX.Element[] | string;
}

export function Tabs (props: TabsProps) {
    const { children } = props;

    const className = setClassName([
        "tabs",
    ]);

    return (
        <div className={className}>{children}</div>
    )
}

export function TabsHeader (props: TabsProps) {
    const { children } = props;

    const className = setClassName([
        "tabs-header",
    ]);

    return (
        <div className={className}>{children}</div>
    )
}

export function TabsBody (props: TabsProps) {
    const { children } = props;

    const className = setClassName([
        "tabs-body",
    ]);

    return (
        <div className={className}>{children}</div>
    )
}

interface TabsItemProps {
    children?: JSX.Element | JSX.Element[] | string;
    isActive: boolean;
    onClick?: () => unknown
}

export function TabsItem (props: TabsItemProps) {
    const { children, isActive, onClick } = props;

    const className = setClassName([
        "tabs-item",
        (isActive ? "tabs-item--is-active" : "")
    ]);

    return (
        <div className={className} onClick={onClick}>{children}</div>
    )
}
