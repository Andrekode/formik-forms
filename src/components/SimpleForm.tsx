import React from 'react';
import { Grid, TextField, Button, Box, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import MyCheckbox from './MyCheckbox';


const SimpleForm: React.FC<{}> = () => {
    return (
        <Box>
            <Formik
                initialValues={{ firstName: '', lastName: '', phoneNumber: '', isAvailable: false }}
                onSubmit={(data, actions) => {
                    console.log(data);
                    actions.resetForm();
                }}
            >
                {(props) => {
                    return (
                        <Form>
                            <Grid container direction='column' spacing={2}>
                                <Grid item>
                                    <Field
                                        name='firstName'
                                        label='First name'
                                        type='input'
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name='lastName'
                                        label='Last name'
                                        type='input'
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name='phoneNumber'
                                        type='input'
                                        as={TextField}
                                        label='Phone Number'
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Field
                                                name='isAvailable'
                                                type='checkbox'
                                                as={Checkbox}
                                            />
                                        }
                                        label='I am Available'
                                    />
                                </Grid>
                                <Grid item>
                                    <Button type='submit'>Submit</Button>
                                </Grid>
                                <pre>{JSON.stringify(props, null, 2)}</pre>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default SimpleForm;
