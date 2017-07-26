import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props

    return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}></div>
                <ShelfChanger book={ book } />
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map((author) => (
                <div className="book-authors">{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
