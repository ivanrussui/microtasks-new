import React from 'react';
import './App.css';
import {Site} from './01/Site';
import {StudentsAndTopCars} from './02/StudentsAndTopCars';
import {ButtonWrap} from './03/ButtonWrap';
import {MyUseState} from './04/MyUseState';
import {FilterWrap} from './05/FilterWrap';

function App() {
    return (
        <div className="App">
            {/*<Site/>*/}
            {/*<StudentsAndTopCars/>*/}
            {/*<ButtonWrap/>*/}
            {/*<MyUseState/>*/}
            <FilterWrap/>
        </div>
    );
}

export default App;
