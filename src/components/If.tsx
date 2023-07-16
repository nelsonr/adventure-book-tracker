interface IfProps {
    condition: boolean;
    children: JSX.Element | JSX.Element[] | string;
}

export default function If (props: IfProps) {
    const { condition, children } = props;

    if (condition) {
        return children;
    }

    return null;
}
