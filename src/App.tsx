import React from 'react';
import './App.css';
import {Site} from './01/Site';
import {StudentsAndTopCars} from './02/StudentsAndTopCars';
import {ButtonWrap} from './03/ButtonWrap';
import {MyUseState} from './04/MyUseState';

function App() {
    return (
        <div className="App">
            {/*<Site/>*/}
            {/*<StudentsAndTopCars/>*/}
            {/*<ButtonWrap/>*/}
            <MyUseState/>
        </div>
    );
}

export default App;
