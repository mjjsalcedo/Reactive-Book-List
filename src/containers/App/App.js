import React, { Component } from 'react';
import Header from '../../components/Header.js';
import AppTitle from '../../components/BookListAppTitle.js';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js'
import BookList from '../BookList/index.js'
import BookFilterInput from '../../components/BookFilterInput.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'React Book List',
      books: [],
      searchFilter: ''
    };

    this.searchFilterInput = this.searchFilterInput.bind(this)
  }


  searchFilterInput(event){
    var searchFilter = event.target.value
    this.setState({searchFilter})
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
      <BookFilterInput setSearchFilter={ this.searchFilterInput }/>
      <BookList books={this.state.books} searchFilter={this.state.searchFilter} />
      </div>
      );
  }
}

export default App;
