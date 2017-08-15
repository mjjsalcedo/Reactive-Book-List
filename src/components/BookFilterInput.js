import React from 'react';

var BookFilterInput = ({ setSearchFilter }) => (

  <input type ="text" placeholder="search..." onChange={ setSearchFilter }/>
)

export default BookFilterInput;