import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Body} from './components/Body';

export const Site = () => {
    return (
        <>
            <Header title={'New Title'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </>
    );
};
