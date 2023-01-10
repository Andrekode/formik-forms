import React from 'react';
import { TextField } from '@mui/material';
import {useField, FieldHookConfig, FieldProps } from 'formik';

interface Props {
    label: string;
    required?: boolean;
    hasMultiline?: boolean;
    maxRows?: number;
    minRows?: number;
}

const MyTextField = ({
    label,
    required,
    hasMultiline,
    maxRows,
    minRows,
    ...props
}: Props & FieldHookConfig<string>) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            {...field}
            fullWidth
            label={label}
            helperText={errorText}
            error={meta.touched && Boolean(meta.error)}
            required={required}
            minRows={minRows}
            maxRows={maxRows}
            multiline={hasMultiline}
        />
    );
};

export default MyTextField;
