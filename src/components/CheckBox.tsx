import React, {ChangeEvent} from 'react';

type PropsType = {
    isDone: boolean
    callBack: (isDone: boolean) => void
}

export const CheckBox = (props: PropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
    );
};

