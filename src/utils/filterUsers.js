import { LIST_LIMIT } from '../constants/paginationParams';

export const filterUsers = (users, currentPage, filter) => {
  const filtedUsers = users.filter((user) => {
    const normalizedFilter = filter.toLowerCase();
    const newUser = JSON.stringify(user);
    return newUser.toLowerCase().includes(normalizedFilter);
  });

  const startAt = (currentPage - 1) * LIST_LIMIT;
  const endAt = currentPage * LIST_LIMIT;

  const folteredList = filtedUsers.slice(startAt, endAt);
  const totalPages = Math.ceil(filtedUsers.length / LIST_LIMIT);

  return [totalPages, folteredList];
};
