import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.book.author}</h2>
        <h4>{this.props.book.title}</h4>
      </div>
    );
  }
}
export default Book;
