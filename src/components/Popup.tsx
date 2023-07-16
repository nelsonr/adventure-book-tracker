import { getClassName } from '../Utils';
import Box from './Box';
import './Popup.scss';

interface PopupProps {
    children: JSX.Element | JSX.Element[];
    show: boolean;
}

export default function Popup (props: PopupProps) {
    const { children, show } = props;

    const className = getClassName([
        "popup",
        (show ? "popup--show" : "")
    ]);

    return (
        <div className={className}>
            <Box>
                {children}
            </Box>
        </div>
    )
}
