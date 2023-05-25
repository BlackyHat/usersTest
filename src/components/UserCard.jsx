import PropTypes from 'prop-types';
import userAvatar from '../images/user_picture.png';

const UserCard = ({ data }) => {
  const { avatar, firstName, lastName, email, phone, birthday } = data;
  return (
    <li className="card mb-3 mx-auto p-2 w-100" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={avatar || userAvatar}
            alt={firstName + lastName}
            className="img-fluid rounded-start object-fit-cover w-100 h-100"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">Phone: {phone}</p>
            <p className="card-text">Birthday: {birthday}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserCard;

UserCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }),
};
