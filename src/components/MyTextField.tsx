import React from 'react';
import { TextField } from '@mui/material';
import { FieldAttributes, useField } from 'formik';

const MyTextField: React.FC<FieldAttributes<{label: string}>> = ({label, ...props}) => {
    const [field, meta] = useField(props);

    const errorText = meta.error && meta.touched ? meta.error : '';

    return <TextField {...field}    label={label} helperText={errorText} error={meta.touched && Boolean(meta.error)}/>;
};

export default MyTextField;
