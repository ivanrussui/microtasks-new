import React, {FC} from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type StudentsType = {
    // students: any
    // students: StudentType[]
    students: Array<StudentType>
}

export const Students: FC<StudentsType> = ({students}) => {
    return (
        <ul>
            {students.map(el => <li key={el.id}>Имя: {el.name}, возраст: {el.age}</li>)}

            {/*альтернатива*/}
            {/*{students.map((el, index) => {*/}
            {/*    debugger*/}
            {/*    return <li key={index}>Номер: {el.id}, имя: {el.name}, возраст: {el.age}</li>;*/}
            {/*})}*/}
        </ul>
    );
};
