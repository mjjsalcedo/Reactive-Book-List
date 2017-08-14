import React from 'react';
import Book from '../../components/Book';

const BookList = ({ books, searchFilter }) => (
  <ul>
  { books.filter( book => {
              // return book.title matches search phrase
              // or book.author matches
              return searchFilter === '' ||
              book.title.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ||
              book.author.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ;
            })
  .map( book =>
    <Book title={book.title} author={book.author} />
    )}
  </ul>
  );

export default BookList;