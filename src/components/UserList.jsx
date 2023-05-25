import PropTypes from 'prop-types';
import UserCard from './UserCard';

const UserList = ({ users, onEditUser }) => {
  return (
    <section>
      <ul className="container text-center">
        {users &&
          users.map((user) => {
            return (
              <UserCard key={user.id} data={user} onEditUser={onEditUser} />
            );
          })}
      </ul>
    </section>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
      birthday: PropTypes.string,
    })
  ),
  onEditUser: PropTypes.func,
};
