import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack: (currentTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(true)
    let [currentTitle, setCurrentTitle] = useState(props.title)
    console.log(currentTitle)

    const changeEdit = () => {
        setEdit(!edit)
        changeTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTitle(e.currentTarget.value)
    }
    const changeTask = () => {
        let newTitle = currentTitle.trim();
        props.callBack(newTitle);
    }

    return (
        edit
            ? <input value={currentTitle} onBlur={changeEdit} onChange={onChangeHandler} autoFocus/>
            : <span onDoubleClick={changeEdit}>{props.title}</span>
    );
};

