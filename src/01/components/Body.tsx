import {JSX} from 'react';

type BodyType = {
    titleForBody: string
}

export const Body = ({titleForBody}: BodyType): JSX.Element => {
    return (
        <div>{titleForBody}</div>
    );
};