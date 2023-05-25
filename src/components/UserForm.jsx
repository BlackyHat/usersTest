import { useState } from 'react';
import { Form, Formik } from 'formik';
import { formSchema } from '../validation/formSchema';
import PropTypes from 'prop-types';

import { addUser } from '../utils/addUser';
import { uploadAvatar } from '../utils/uploadAvatar';
import { updateUser } from '../utils/updateUser';

import FormField from './FormField';
import PhoneInputField from './PhoneInputField';
import AvatarInputField from './AvatarInputField';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthday: '',
};

const UserForm = ({ data, onClose, onAddUser, onEditUser, label }) => {
  const [file, setFile] = useState(null);
  const [previewImageUrl, setPreviewImageUrl] = useState(data?.avatar || null);

  const handleAvatarChange = (e) => {
    const userAvatarPreviewImg = e.target.files[0];

    if (userAvatarPreviewImg.size > 2097152) {
      alert('File is too big!');
      return;
    }

    setFile(userAvatarPreviewImg);

    const reader = new FileReader();
    const blob = new Blob([userAvatarPreviewImg], {
      type: userAvatarPreviewImg.type,
    });
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setPreviewImageUrl(reader.result);
    };
  };

  const handleSubmiting = async (values, actions) => {
    try {
      if (file) {
        const avatarURL = await uploadAvatar(file);
        values.avatar = avatarURL || '';
      }
      if (!data) {
        await addUser(values);
      } else {
        await updateUser(values);
      }
    } catch (error) {
      console.log(error);
    }
    actions.setSubmitting(false);
    setPreviewImageUrl(null);
    onAddUser && onAddUser();
    onEditUser && onEditUser();
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
                previewImageUrl={previewImageUrl}
                handleAvatarChange={handleAvatarChange}
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
                {label || 'Submit'}
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
  onAddUser: PropTypes.func,
  onEditUser: PropTypes.func,
  label: PropTypes.string,
};
