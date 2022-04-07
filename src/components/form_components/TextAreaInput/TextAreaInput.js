import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import './TextAreaInput.css';


const TextAreaInput = (props) => {
    return (
        <div>
            {props.required==='' ? <Controller 
                name={props.name}
                control={props.control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label={props.label}
                        multiline
                        rows={props.rows}
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
                        multiline
                        rows={props.rows}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        style={{minWidth: '100%'}}
                    />
                )}
                rules={{ required: props.required }}
            />}
        </div>
    );
};

export default TextAreaInput;