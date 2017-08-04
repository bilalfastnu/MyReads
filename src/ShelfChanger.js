import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfChange: PropTypes.bool.isRequired,
    notifyShelfChange: PropTypes.func.isRequired
  }

  state =  { shelfChange: this.props.shelfChange }

  changeShelf = (book, event) => {
    const newShelf =  event.target.value
    this.props.book.shelf = newShelf
    BooksAPI.update(book, newShelf).then(this.props.notifyShelfChange())
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select  onChange={(e) => this.changeShelf(book, e)}
          value={book.shelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger
