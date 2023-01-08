import React from 'react';
import {
    Grid,
    TextField,
    Button,
    Box,
    Checkbox,
    FormControlLabel,
    FormControl,
} from '@mui/material';
import { Formik, Field, Form } from 'formik';
import simpleFormSchema from '../validationSchemas/simpleFormSchema';

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
                    const { errors, touched, handleReset } = props;
                    return (
                        <Form>
                            <Grid container direction='column' spacing={2}>
                                <Grid item>
                                    <Field
                                        name='firstName'
                                        label='First name'
                                        type='input'
                                        error={touched.firstName && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name='lastName'
                                        label='Last name'
                                        type='input'
                                        error={touched.lastName && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        as={TextField}
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name='phoneNumber'
                                        type='input'
                                        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                        helperText={touched.phoneNumber && errors.phoneNumber}
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
