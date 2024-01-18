import {FC} from 'react';

type FooterType = {
    titleForFooter: string
}

export const Footer: FC<FooterType> = ({titleForFooter}) => {
    return (
        <div>{titleForFooter}</div>
    );
};