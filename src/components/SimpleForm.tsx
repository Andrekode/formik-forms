import React from 'react';
import { Grid, Button, Box, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import simpleFormSchema from '../validationSchemas/simpleFormSchema';
import MyTextField from './MyTextField';
import MyCheckbox from './MyCheckbox';
import MySwitch from './MySwitch';
import MySelect from './MySelect';

const SimpleForm = () => {
    return (
        <Box maxWidth={500}>
            <Formik
                initialValues={{
                    type: 'person1',
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    description: '',
                    isAvailable: false,
                    isOn: false,
                }}
                validationSchema={simpleFormSchema}
                onSubmit={(data, actions) => {
                    alert(JSON.stringify(data, null, 2));
                    actions.resetForm();
                }}
            >
                {(props) => {
                    const { handleReset } = props;
                    return (
                        <Form>
                            <Grid container direction='column' spacing={2} p={1} width={500}>
                                <Grid item>
                                    <MySelect name='type' />
                                </Grid>
                                <Grid item>
                                    <MyTextField
                                        name='firstName'
                                        label='First name'
                                        required={true}
                                    />
                                </Grid>
                                <Grid item>
                                    <MyTextField
                                        name='lastName'
                                        label='Last name'
                                        required={true}
                                    />
                                </Grid>
                                {props.values.type === 'person2' && (
                                    <Grid item>
                                        <MyTextField
                                            name='phoneNumber'
                                            label='Phone number'
                                            required={true}
                                        />
                                    </Grid>
                                )}
                                <Grid item>
                                    <MyTextField
                                        name='description'
                                        label='Description'
                                        required={true}
                                        hasMultiline={true}
                                        minRows={3}
                                        maxRows={5}
                                    />
                                </Grid>
                                <Grid item>
                                    <MyCheckbox name='isAvailable' label='Available' />
                                </Grid>
                                <Grid item>
                                    <MySwitch name='isOn' type='checkbox' label='On' />
                                </Grid>

                                <Grid item>
                                    <Button type='submit'>Submit</Button>
                                    <Button onClick={handleReset}>Reset Form</Button>
                                </Grid>
                            </Grid>
                            <Stack>
                                <pre>{JSON.stringify(props.values, null, 2)}</pre>
                                <pre>{JSON.stringify(props.errors, null, 2)}</pre>
                            </Stack>
                        </Form>
                    );
                }}
            </Formik>
        </Box>
    );
};

export default SimpleForm;
