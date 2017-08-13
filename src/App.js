import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './containers/BookListContainer';
import NewBookForm from './containers/NewBookFormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
