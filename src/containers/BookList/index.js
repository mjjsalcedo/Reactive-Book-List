import React from 'react';
import Book from '../../components/Book.js';

var BookList = ({books, searchFilter}) => (
<ul>
          { books.filter( book => {
            return searchFilter === '' ||
                book.title.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ||
                book.author.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0 ;
            }).map( book =>
            <Book key={book._id} title={book.title} author={book.author} />
          )}
        </ul>
)


export default BookList;