import React from 'react';
import Header from './components/Header';
import NewBookForm from './containers/NewBookForm/index.js';
import BookList from './containers/BookList/index.js';
import SearchField from './components/BookListAppTitle';
import { getBooksFromFakeXHR, addBookToFakeXHR } from './lib/books.db.js';
import './containers/App/style.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'React Book List',
      books: [],
      searchFilter: ''
    };

    this.parentAddBook = this.parentAddBook.bind(this);
    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter(event) {
    console.log(event.target.value);
    const searchFilter = event.target.value;
    this.setState({ searchFilter });
  }

  // send this down to my child
  parentAddBook(newBook) {
    const books = this.state.books;

    addBookToFakeXHR(newBook)
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  componentDidMount() {
    getBooksFromFakeXHR()
    .then(books => {
      this.setState({
        books: books
      })
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div>
        <Header />
        <SearchField setSearchFilter={this.setSearchFilter} />
        <BookList
          books={this.state.books}
          searchFilter={this.state.searchFilter}
        />
        <NewBookForm childAddBook={this.parentAddBook} />
      </div>
    );
  }
}

export default App;