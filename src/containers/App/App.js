import React, { Component } from 'react';
import Header from '../../components/Header.js';
import AppTitle from '../../components/BookListAppTitle.js';


class App extends Component {

  constructor(){
    super();

    this.state = {
      title: 'React Book List',
      books: [],
      searchFilter: ''
    };
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
