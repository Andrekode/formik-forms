import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FieldAttributes, useField } from 'formik';


const MyCheckbox: React.FC<FieldAttributes<{label: string}>> = ({ label, ...props }) => {
    const [field] = useField(props);

    return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

export default MyCheckbox;
