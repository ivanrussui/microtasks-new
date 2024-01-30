import React, {ChangeEvent, FC} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: FC<InputType> = ({title, setTitle}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    return <input value={title} onChange={onChangeHandler} type="text"/>;
};
