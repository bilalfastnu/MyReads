import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, changeShelf } = this.props

    return (
      <div className="book-shelf-changer">
        <select  onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ book.shelf }>
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
