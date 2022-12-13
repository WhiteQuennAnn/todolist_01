import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(true)

    return (
        edit
            ? <input value={props.title}/>
            : <span>{props.title}</span>
    );
};

