import {useState} from 'react';
import {Filter} from './components/Filter';

export type NameType = 'all' | 'dollar' | 'ruble';

export const FilterWrap = () => {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ]);

    const [name, setName] = useState<NameType>('all');

    let currentMoney = money;
    if (name === 'dollar') {
        currentMoney = money.filter(el => el.banknote === 'dollar');
    }
    if (name === 'ruble') {
        currentMoney = money.filter(el => el.banknote === 'ruble');
    }

    const onClickHandler = (name: NameType) => setName(name);

    return <Filter currentMoney={currentMoney} onClickHandler={onClickHandler}/>;
};
