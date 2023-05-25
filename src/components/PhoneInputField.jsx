import { formatPhoneNumberIntl } from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const PhoneInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const setPhone = (value) => {
    const formattedNumber = formatPhoneNumberIntl(value);
    helpers.setValue(formattedNumber);
  };
  return (
    <div className="input-group mb-3 ">
      <label className="form-label w-100 text-start">
        {label}
        <Input
          {...props}
          {...field}
          country="UA"
          international
          className="form-control"
          withCountryCallingCode
          value={field.value}
          placeholder="+380 (XX) XXX-XX-XX"
          onChange={setPhone}
        />
      </label>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default PhoneInputField;

PhoneInputField.propTypes = {
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
