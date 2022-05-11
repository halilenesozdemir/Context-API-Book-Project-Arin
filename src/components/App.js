import React from 'react';
import Booklist from './Booklist';
import BookContextProvider from '../contexts/BookContext';

class App extends React.Component {
  render() {
    return (
      <div>
        <BookContextProvider>
          <Booklist />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
