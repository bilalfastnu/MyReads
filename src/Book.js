import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props

    return (
          <li>
            <div className="book">
              <div className="book-top">
                { book.imageLinks && book.imageLinks.thumbnail && (
                  <div
                    className="book-cover"
                    style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                  </div>
                )}
                { (!book.imageLinks || !book.imageLinks.thumbnail) && (
                  <div
                    className="book-cover"
                    style={{ width: 128, height: 188 }}>
                  </div>
                )}
                <ShelfChanger
                  book={ book }
                  books={ books }
                  changeShelf={changeShelf }
                />
              </div>
              { book.title &&  (
                <div className="book-title">{book.title}</div>
              )}
              { book.authors && book.authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
