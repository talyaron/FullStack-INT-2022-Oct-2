import { FC } from 'react';
import { LOGIN_FIELDS } from '../../consts/loginFields';
import { TextField } from '@mui/material';

const SignIn:FC = () => {
    return (
        <div>
            {LOGIN_FIELDS.map((field, index) => (
                <TextField 
                label
                />
            ))}
        </div>
    );
};

export default SignIn;