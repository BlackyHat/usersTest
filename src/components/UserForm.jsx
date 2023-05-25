import { Form, Formik } from 'formik';
import { formSchema } from '../validation/formSchema';
import FormField from './FormField';
import PhoneInputField from './PhoneInputField';
import AvatarInputField from './AvatarInputField';
import { useState } from 'react';
import { writeDataToFirestore } from '../utils/addUser';
import { uploadAvatar } from '../utils/uploadAvatar';
import { updateDataToFirestore } from '../utils/updateUser';
import PropTypes from 'prop-types';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
};

const UserForm = ({ data, onClose }) => {
  const [file, setFile] = useState(null);

  const handleSubmiting = async (values, actions) => {
    try {
      if (file) {
        const avatarURL = await uploadAvatar(file);
        values.avatar = avatarURL || '';
      }
      if (!data) {
        await writeDataToFirestore(values);
      } else {
        await updateDataToFirestore(values);
      }
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    actions.resetForm();
    onClose && onClose();
  };

  const initForm = { ...initialValues, ...data };

  return (
    <section>
      <Formik
        initialValues={initForm}
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

UserForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }),
  onClose: PropTypes.func,
};
