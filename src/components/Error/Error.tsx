import React from 'react';
import { ErrorText } from './Error.style';

type ErrorProp ={
    children: string;
}

const Error: React.FC<ErrorProp> = ({children}) => {
    return (
        <ErrorText>{children}</ErrorText>
    );
};

export default Error;