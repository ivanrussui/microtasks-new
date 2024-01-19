import {Button} from './components/Button';
import {useState} from 'react';

export type NameType = 'One' | 'Two' | 'Three'

export const ButtonWrap = () => {
    let [name, setName] = useState<NameType>();

    if (name === 'One') {
        console.log(`I am Vasa, my age - 30, live in Moscow`);
    }
    if (name === 'Two') {
        console.log(`I am Alla, my age - 25,`);
    }
    if (name === 'Three') {
        console.log('I am stupid Button');
    }

    const onClickHandler = (name: NameType) => setName(name);

    return (
        <>
            <Button name={'One'} callBack={() => onClickHandler('One')}/>
            <Button name={'Two'} callBack={() => onClickHandler('Two')}/>
            <Button name={'Three'} callBack={() => onClickHandler('Three')}/>
        </>
    );
};


// реализация до домашки
// export const ButtonWrap = () => {
//     const ButtonOneFunc = (subscriber: string, age: number, address: string) => {
//         console.log(`I am ${subscriber}, my age - ${age}, ${address}`);
//     };
//     const ButtonTwoFunc = (subscriber: string, age: number) => console.log(`I am ${subscriber}, my age - ${age}`);
//     const ButtonThreeFunc = () => console.log('I am stupid Button');
//
//     return (
//         <>
//             <Button name={'One'} callBack={() => ButtonOneFunc('Vasa', 30, 'live in Moscow')}/>
//             <Button name={'Two'} callBack={() => ButtonTwoFunc('Alla', 25)}/>
//             <Button name={'Three'} callBack={ButtonThreeFunc}/>
//         </>
//     );
// };