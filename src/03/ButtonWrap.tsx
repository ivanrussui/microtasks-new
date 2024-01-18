import {Button} from './components/Button';

export const ButtonWrap = () => {
    const ButtonOneFunc = (subscriber: string, age: number, address: string) => {
        console.log(`I am ${subscriber}, my age - ${age}, ${address}`);
    };
    const ButtonTwoFunc = (subscriber: string, age: number) => console.log(`I am ${subscriber}, my age - ${age}`);
    const ButtonThreeFunc = () => console.log('I am stupid Button');

    return (
        <>
            <Button name={'One'} callBack={() => ButtonOneFunc('Vasa', 30, 'live in Moscow')}/>
            <Button name={'Two'} callBack={() => ButtonTwoFunc('Alla', 25)}/>
            <Button name={'Three'} callBack={ButtonThreeFunc}/>
        </>
    );
};
