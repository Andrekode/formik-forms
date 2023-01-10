import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useField, FieldHookConfig } from 'formik';

interface Props {
    label: string;
}

const MyCheckbox = ({
    label,
    ...props
}: Props & FieldHookConfig<boolean>) => {
    const [field] = useField(props);


    return <FormControlLabel {...field}  control={<Checkbox />} label={label} />;
};

export default MyCheckbox;
