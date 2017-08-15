import React, { Component } from 'react';
import Header from '../../components/Header.js';
import AppTitle from '../../components/BookListAppTitle.js';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js'
import BookList from '../BookList/index.js'

class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'React Book List',
      books: [],
      searchFilter: ''
    };
  }


  componentDidMount() {
    getBooksFromFakeXHR().
    then((books) => {
      this.setState({
        books : books
      });
    })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <AppTitle title= {this.state.title}/>
      <BookList books={this.state.books} />
      </div>
      );
  }
}

export default App;
