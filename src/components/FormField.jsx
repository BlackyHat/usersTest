import { useField } from 'formik';
import PropTypes from 'prop-types';

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-group mb-3 position-relative">
      <label className="form-label w-100 text-start">
        {label}
        <input {...field} {...props} className="form-control" />
      </label>
      {meta.touched && meta.error && (
        <div
          className="text-sm-start text-danger border-danger position-absolute"
          style={{ bottom: '-20%', left: '16px' }}
        >
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default FormField;

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
