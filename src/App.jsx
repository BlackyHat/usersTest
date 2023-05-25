import { useEffect, useState } from 'react';

import { useToggle } from './hooks/useToggle';
import { getAllUsers } from './utils/getAllUsers';
import { filterUsers } from './utils/filterUsers';

import UserForm from './components/UserForm';
import FilterInput from './components/FilterInput';
import UserList from './components/UserList';
import CustomPagination from './components/CustomPagination';
import PureModal from './components/PureModal';
import { MdGroupAdd } from 'react-icons/md';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const { isOpen, onOpen, onClose } = useToggle();

  const handleUpdateUser = () => {
    getUsersData();
  };

  const getUsersData = async () => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handlerPageChange = (choosedPage) => {
    setPage(choosedPage);
  };

  const handlerFilter = (query) => {
    setPage(1);
    setFilter(query);
  };

  const [totalPages, filteredUsers] = filterUsers(users, page, filter);

  return (
    <div className="container-fluid text-center" style={{ maxWidth: '960px' }}>
      <div className="text-end">
        <MdGroupAdd
          className="m-2"
          style={{
            color: '#41526b',
            cursor: 'pointer',
          }}
          size={32}
          onClick={onOpen}
        />
      </div>
      <FilterInput filter={filter} handlerFilter={handlerFilter} />
      {filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} onEditUser={handleUpdateUser} />
      ) : (
        <h2>Тo users were found ...</h2>
      )}
      <CustomPagination
        current={page}
        totalPages={totalPages}
        onPageChange={handlerPageChange}
      />
      {isOpen && (
        <PureModal title="Add new User" show={isOpen} handleClose={onClose}>
          <UserForm
            onClose={onClose}
            onAddUser={handleUpdateUser}
            label="Add User"
          />
        </PureModal>
      )}
    </div>
  );
}

export default App;
