import { Form, Formik } from 'formik';
import { formSchema } from '../validation/formSchema';
import FormField from './FormField';
import PhoneInputField from './PhoneInputField';
import AvatarInputField from './AvatarInputField';
import { useState } from 'react';
import { writeDataToFirestore } from '../utils/addUser';
import { uploadAvatar } from '../utils/uploadAvatar';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
};

const UserForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmiting = async (values, actions) => {
    try {
      if (file) {
        const avatarURL = await uploadAvatar(file);
        values.avatar = avatarURL || '';
      }

      await writeDataToFirestore(values);
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmiting}
      >
        {() => {
          return (
            <Form className="text-center m-auto" style={{ maxWidth: '560px' }}>
              <AvatarInputField
                name="avatar"
                id="avatar"
                type="file"
                accept="image/*"
                addAvatar={setFile}
              />
              <FormField name="firstName" type="text" label="First Name" />
              <FormField name="lastName" type="text" label="Last Name" />
              <FormField name="email" type="email" label="Email" />
              <FormField name="birthday" type="date" label="Birthday" />
              <PhoneInputField
                name="phone"
                type="tel"
                label="Phone Number"
                maxLength="16"
              />
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default UserForm;
