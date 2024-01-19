import React, {FC} from 'react';
import {NameType} from '../ButtonWrap';

type ButtonType = {
    name: NameType
    callBack: () => void
}

export const Button: FC<ButtonType> = ({name, callBack}) => {
    const onClickHandler = () => callBack();

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
