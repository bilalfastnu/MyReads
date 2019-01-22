import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = props => {
  const { book, books, changeShelf } = props;
  const updateShelf = event => changeShelf(book, event.target.value);

  // set current shelf to none as default
  let currentShelf = 'none';

  // if book is in current list, set current shelf to book.shelf
  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} defaultValue={currentShelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default ShelfChanger;
