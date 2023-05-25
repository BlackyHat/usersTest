import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <section>
      <ul className="container text-center">
        {users &&
          users.map((user, idx) => {
            return <UserCard key={idx} data={user} />;
          })}
      </ul>
    </section>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
};
