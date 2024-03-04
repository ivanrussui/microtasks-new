import React, {JSX} from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    className?: string
}

export const Button = ({name, callBack, className}: ButtonType): JSX.Element => {
    return <button onClick={callBack} className={className}>{name}</button>;
};

