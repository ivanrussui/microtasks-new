import React, {FC} from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button: FC<ButtonType> = ({name, callBack}) => {
    const onClickHandler = () => callBack();

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
