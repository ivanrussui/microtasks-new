import React, {FC} from 'react';

type TopCarType = {
    manufacturer: string
    model: string
}

type TopCarsType = {
    topCars: Array<TopCarType>
}

export const TopCars: FC<TopCarsType> = ({topCars}) => {
    return (
        <table>
            <tr>
                {topCars.map((el, index) => {
                    return <th key={index}>{el.manufacturer}</th>;
                })}
            </tr>
            <tr>
                {topCars.map((el, index) => {
                    return <td key={index}>{el.model}</td>;
                })}
            </tr>
        </table>
    );
};
