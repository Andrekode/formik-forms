import * as Yup from 'yup';

const simpleFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'First name can only contain letters')
        .min(2, 'First name must be at least 2 characters long')
        .max(20, "First name can't be longer than 20 characters")
        .required('First name is required'),
    lastName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Last name can only contain letters')
        .min(2, 'Last name must be at least 2 characters long')
        .max(20, "Last name can't be longer than 20 characters")
        .required('Last name is required'),
    phoneNumber: Yup.string()
    .when('type', {
        is: (value: string) => value === 'person2',
        then: Yup.string().required('Phone number is required')
    }),
    description: Yup.string().required('Description is required'),
    isAvailable: Yup.boolean(),
    isOn: Yup.boolean()
});

export default simpleFormSchema;
