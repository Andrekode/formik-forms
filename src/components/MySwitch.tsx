import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { useField, FieldHookConfig } from 'formik';

interface Props {
    label: string;
}

const MySwitch = ({ label, ...props }: Props & FieldHookConfig<boolean>) => {
    const [field] = useField(props);

    return <FormControlLabel {...field} control={<Switch />} label={label} />;
};

export default MySwitch;
