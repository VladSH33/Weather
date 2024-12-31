import React from 'react';
import { ErrorText } from './Error.style';

type ErrorProp ={
    error: string;
}

const Error: React.FC<ErrorProp> = ({ error }) => {
    return (
        <ErrorText>{error}</ErrorText>
    );
};

export default Error;