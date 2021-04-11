import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
  const root = document.getElementById('root');
  if (root === null) {
    return
  } else {
    ReactDOM.render(<h1>Hello</h1>, root);
  }

});
