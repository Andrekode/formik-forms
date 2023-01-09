import React from 'react';
import {
    Grid,
    Button,
    Box,
} from '@mui/material';
import { Formik, Form } from 'formik';
import simpleFormSchema from '../validationSchemas/simpleFormSchema';
import MyTextField from './MyTextField';
import MyCheckbox from './MyCheckbox';

const SimpleForm: React.FC<{}> = () => {
    return (
        <Box>
            <Formik
                initialValues={{ firstName: '', lastName: '', phoneNumber: '', isAvailable: false }}
                validationSchema={simpleFormSchema}
                onSubmit={(data, actions) => {
                    console.log(data);
                    actions.resetForm();
                }}
            >
                {(props) => {
                    const { handleReset } = props;
                    return (
                        <Form>
                            <Grid container direction='column' spacing={2}>
                                <Grid item>
                                    <MyTextField name='firstName' type='input' label='First name' />
                                </Grid>
                                <Grid item>
                                    <MyTextField name='lastName' type='input' label='Last name' />
                                </Grid>
                                <Grid item>
                                    <MyTextField
                                        name='phoneNumber'
                                        type='input'
                                        label='Phone number'
                                    />
                                </Grid>
                                <Grid item>
                                <MyCheckbox name='isAvailable' type="checkbox" label='Available' />
                                </Grid>
                                <Grid item>
                                    <Button type='submit'>Submit</Button>
                                    <Button onClick={handleReset}>Reset Form</Button>
                                </Grid>
                            </Grid>
                            <pre>{JSON.stringify(props, null, 2)}</pre>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default SimpleForm;
