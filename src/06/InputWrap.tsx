import {useState} from 'react';
import {FullInput} from './components/FullInput';
import {Button} from './components/Button';
import {Input} from './components/Input';

export const InputWrap = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    // данное состояние нудно если у нас инпут и баттон разные компоненты
    let [title, setTitle] = useState('');

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message]);
    };

    const callBackHandler = () => {
        addMessage(title);
        setTitle('');
    };

    return (
        <>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                );
            })}
        </>
    );
};
