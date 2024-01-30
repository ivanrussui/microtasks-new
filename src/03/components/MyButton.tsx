import React, {FC} from 'react';
import {NameType} from '../ButtonWrap';

type ButtonType = {
    name: NameType
    callBack: () => void
}

export const MyButton: FC<ButtonType> = ({name, callBack}) => {
    const onClickHandler = () => callBack();

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
