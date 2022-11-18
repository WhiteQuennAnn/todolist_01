import React from 'react';

type ButtonPropsType = {
    callBack: ()=>void
    nickName: string
}


export const Button = (props: ButtonPropsType) => {

        const onClickHandler = () => {
        props.callBack
    }

    return (
        <button onClick={onClickHandler}>{props.nickName} </button>
    );
};

