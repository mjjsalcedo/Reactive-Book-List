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
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
      );
  }
}

export default App;
