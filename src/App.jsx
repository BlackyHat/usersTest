import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import CustomPagination from './components/CustomPagination';
import { useEffect, useState } from 'react';
import { getAllUsers } from './utils/getUsers';
import FilterInput from './components/FilterInput';
import { filterUsers } from './utils/filterUsers';
import { MdGroupAdd } from 'react-icons/md';

function App() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

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

  const onToggleForm = () => {
    setOpen(!open);
  };

  const [totalPages, filteredUsers] = filterUsers(users, page, filter);

  return (
    <div className="container-fluid text-end">
      <MdGroupAdd className="m-2" size={32} onClick={onToggleForm} />

      {open && <UserForm />}
      <FilterInput filter={filter} handlerFilter={handlerFilter} />
      <UserList users={filteredUsers} />
      <CustomPagination
        current={page}
        totalPages={totalPages}
        onPageChange={handlerPageChange}
      />
    </div>
  );
}

export default App;
