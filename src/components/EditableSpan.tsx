import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(true)
    let [title, setTitle] = useState(props.title)

    const changeEdit = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input value={props.title} onBlur={changeEdit} autoFocus/>
            : <span onDoubleClick={changeEdit}>{props.title}</span>
    );
};

