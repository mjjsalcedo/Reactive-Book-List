import React from 'react';
import Header from './components/Header';
import AppTitle from './components/BookListAppTitle';
import SearchField from './components/BookFilterInput';
import NewBookForm from './containers/NewBookForm/index.js';
import BookList from './containers/BookList/index.js';
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
    const searchFilter = event.target.value;
    this.setState({ searchFilter: searchFilter });
  }

  parentAddBook(newBook) {
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
    return (
      <div>
        <Header />
        <AppTitle title={this.state.title}/>
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