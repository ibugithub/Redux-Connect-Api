import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchUsers } from '../redux/users/usersSlice';

const ShowUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users.results);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {users.map((user) => (
        <li key={nanoid()}>
          {' '}
          {user.name.first}
          {' '}
          {user.name.last}
          {' '}
        </li>
      ))}
    </>
  );
};

export default ShowUsers;
