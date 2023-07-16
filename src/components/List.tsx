import { ChangeEvent, useState } from 'react';
import { getClassName } from '../Utils';
import Box from './Box';
import './List.scss';

interface ListProps {
    title: string;
}

export default function List (props: ListProps) {
    const { title } = props;
    const [value, setValue] = useState("");

    const className = getClassName([
        "list",
    ]);

    const onChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(ev.target.value);
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
                    onChange={onChange}
                    placeholder='Add your notes here...'
                ></textarea>
            </div>
        </Box>
    )
}
