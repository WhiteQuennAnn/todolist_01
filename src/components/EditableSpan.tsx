import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(true)
    const changeEdit = () => {
        setEdit (!edit)
    }

    return (
        edit
            ? <input value={props.title}/>
            : <span onDoubleClick={changeEdit}>{props.title}</span>
    );
};

