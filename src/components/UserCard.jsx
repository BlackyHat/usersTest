import PropTypes from 'prop-types';
import userAvatar from '../images/user_picture.png';
import { FaUserEdit } from 'react-icons/fa';
import { useToggle } from '../hooks/useToggle';
import PureModal from './PureModal';
import UserForm from './UserForm';

const UserCard = ({ data, onEditUser }) => {
  const { avatar, firstName, lastName, email, phone, birthday } = data;
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <>
      <li className="card mb-3 mx-auto p-2 w-100" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={avatar || userAvatar}
              alt={firstName + lastName}
              className="img-fluid rounded-start object-fit-cover w-100 h-100"
            />
          </div>
          <div className="col-md-8 position-relative ">
            <div className="card-body">
              <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
              <p className="card-text">Email: {email}</p>
              <p className="card-text">Phone: {phone}</p>
              <p className="card-text">Birthday: {birthday}</p>
            </div>
            <FaUserEdit
              className=" position-absolute top-0 end-0"
              style={{
                color: '#41526b',
                cursor: 'pointer',
              }}
              size={32}
              onClick={onOpen}
            />
          </div>
        </div>
      </li>
      {isOpen && (
        <PureModal title="Edit User Info" show={isOpen} handleClose={onClose}>
          <UserForm
            data={data}
            onClose={onClose}
            onEditUser={onEditUser}
            label="Edit"
          />
        </PureModal>
      )}
    </>
  );
};

export default UserCard;

UserCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,

    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }),
  onEditUser: PropTypes.func,
};
