/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { removeBook } from '../redux/books/BookListSlice';

const CommentRemoveEdit = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = async (id) => {
    dispatch(removeBook(id));
    console.log('I am in the reducers');
    const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('the results is ', results);
  };
  return (
    <>
      <button type="submit">Comment</button>
      <button type="submit" onClick={() => handleClick(id)}>Remove</button>
      <button type="submit">Edit</button>
    </>
  );
};

CommentRemoveEdit.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CommentRemoveEdit;
