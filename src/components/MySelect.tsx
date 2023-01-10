import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useField, FieldHookConfig } from 'formik';

const MySelect = ({...props}: FieldHookConfig<string>) => {
    const [field] = useField(props);

    return <Select {...field} fullWidth>
        <MenuItem value='person1'>Person 1</MenuItem>
        <MenuItem value='person2'>Person 2</MenuItem>
        <MenuItem value='person3'>Person 3</MenuItem>
        </Select>;
};

export default MySelect;
