import React, {ChangeEvent, FC, useState} from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput: FC<FullInputType> = ({addMessage}) => {
    let [title, setTitle] = useState('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const onClickHandler = () => {
        addMessage(title);
        setTitle('');
    };

    return (
        <div>
            <input type="text" value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
