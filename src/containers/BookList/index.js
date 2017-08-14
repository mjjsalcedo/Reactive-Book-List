import React from 'react';
import Book from '../../components/Book';

const BookList = ({ books, searchFilter }) => (
  <ul>
  { books.filter( book => {
              return searchFilter === '' ||
              book.title.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ||
              book.author.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ;
            })
  .map((book, i) =>
          <Book title={book.title} author={book.author} key={i} />
      )}
  </ul>
  );

export default BookList;