// import { useState } from 'react';
import PropTypes from 'prop-types';

import userAvatar from '../images/user_picture.png';
import { MdOutlineAddCircle } from 'react-icons/md';

const AvatarInputField = ({
  previewImageUrl,
  handleAvatarChange,
  ...props
}) => {
  return (
    <div className="input-group mb-3 flex-column position-relative align-items-center">
      <img
        src={previewImageUrl || userAvatar}
        alt="User Avatar"
        className="rounded-circle object-fit-cover"
        width={160}
        height={160}
      />
      <div className="input-group">
        <label htmlFor={props.id}>
          <input
            {...props}
            onChange={handleAvatarChange}
            className="form-control btn btn-primary"
            style={{ display: 'none' }}
          />
          <MdOutlineAddCircle
            className=" position-absolute rounded-circle"
            style={{
              bottom: '20%',
              left: '58%',
              color: '#0d6efd',
              cursor: 'pointer',
            }}
            size={32}
          />
        </label>
      </div>
    </div>
  );
};

export default AvatarInputField;

AvatarInputField.propTypes = {
  handleAvatarChange: PropTypes.func.isRequired,
  previewImageUrl: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
};
