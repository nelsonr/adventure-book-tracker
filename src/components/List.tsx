import { ChangeEvent } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import './List.scss';

interface ListProps {
    title: string;
    value: string;
    onChange: (value: string) => unknown;
}

export default function List (props: ListProps) {
    const { title, value, onChange } = props;

    const className = getClassName([
        "list",
    ]);

    const onInputChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(ev.target.value);
    }

    return (
        <Box>
            <div className={className}>
                <div className="list__header">
                    <div className="list__title">{title}</div>
                </div>

                <textarea
                    className="list__body"
                    value={value}
                    onChange={onInputChange}
                    placeholder='Add your notes here...'
                ></textarea>
            </div>
        </Box>
    )
}
