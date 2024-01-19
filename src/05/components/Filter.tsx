import React, {FC} from 'react';
import {NameType} from '../FilterWrap';

type NoteType = {
    banknote: string
    nominal: number
    number: string
}

type FilterType = {
    currentMoney: Array<NoteType>
    onClickHandler: (name: NameType) => void
}

export const Filter: FC<FilterType> = ({currentMoney, onClickHandler}) => {
    return (
        <>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span> {el.banknote} </span>
                            <span> {el.nominal} </span>
                            <span> {el.number} </span>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => onClickHandler('all')}>all</button>
            <button onClick={() => onClickHandler('ruble')}>ruble</button>
            <button onClick={() => onClickHandler('dollar')}>dollar</button>
        </>
    );
};
