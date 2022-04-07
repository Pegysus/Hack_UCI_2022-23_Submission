import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import './TextFieldInput.css';

const TextFieldInput = (props) => {
    return (
        <div>
            {props.required==='' ? <Controller 
                name={props.name}
                control={props.control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label={props.label}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        style={{minWidth: '100%'}}
                    />
                )}
            />

            : <Controller
                name={props.name}
                control={props.control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        required
                        label={props.label}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        style={{minWidth: '100%'}}
                    />
                )}
                rules={{ 
                    pattern: {
                        value: props.value,
                        message: props.required
                    }
                }}
            />}
        </div>
    );
};

export default TextFieldInput;