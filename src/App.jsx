import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import CustomPagination from './components/CustomPagination';
import { useEffect, useState } from 'react';
import { getAllUsers } from './utils/getUsers';
import FilterInput from './components/FilterInput';
import { filterUsers } from './utils/filterUsers';
import { MdGroupAdd } from 'react-icons/md';
import { useToggle } from './hooks/useToggle';
import PureModal from './components/PureModal';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const { isOpen, onOpen, onClose } = useToggle();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.log(error.message);
      }
    };

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
    <div className="container-fluid text-end">
      <MdGroupAdd className="m-2" size={32} onClick={onOpen} />
      <FilterInput filter={filter} handlerFilter={handlerFilter} />
      <UserList users={filteredUsers} />
      <CustomPagination
        current={page}
        totalPages={totalPages}
        onPageChange={handlerPageChange}
      />
      {isOpen && (
        <PureModal title="Add new User" show={isOpen} handleClose={onClose}>
          <UserForm onClose={onClose} />
        </PureModal>
      )}
    </div>
  );
}

export default App;
