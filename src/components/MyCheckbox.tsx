import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FieldAttributes, useField } from 'formik';

type MyCheckboxProps = { label: string } & FieldAttributes<{}>;

const MyCheckbox: React.FC<MyCheckboxProps> = ({ label, ...props }) => {
    const [field] = useField<{}>(props);

    return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

export default MyCheckbox;
