import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('First Name is required'),

  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string()
    .min(8, 'Too Short!')
    .max(36, 'Too Long!')
    .email('Invalid email')
    .required('Email is required'),

  avatar: Yup.string(),
  phone: Yup.string().matches(
    /^\+\d{3} \d{2} \d{3} \d{4}$/,
    'Phone number must be in the format +380 (XX) XXX-XX-XX;'
  ),
  birthday: Yup.date(),
});
