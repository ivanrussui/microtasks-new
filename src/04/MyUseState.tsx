import {useState} from 'react';

export const MyUseState = () => {
    let [state, setState] = useState(1);

    const onClickHandler = () => {
        setState(++state);
        console.log(state);
    };

    const onClickHandlerZero = () => setState(0);

    return (
        <>
            <h1>{state}</h1>
            <button onClick={onClickHandler}>Click</button>
            <button onClick={onClickHandlerZero}>0</button>
        </>
    );
};
