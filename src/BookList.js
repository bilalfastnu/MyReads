import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  //  shelfChange: PropTypes.bool.isRequired,
  //  notifyShelfChange: PropTypes.func.isRequired
  }

  state = { shelfChange: false }

  onShelfChange() {
    this.setState({ shelfChange: true })
  //  this.props.notifyShelfChange();
  }

  render() {
    const { books } = this.props
    let currentBooks = books.filter( book => book.shelf === "currentlyReading")
    let wantToBooks =  books.filter( book => book.shelf === "wantToRead")
    let readBooks = books.filter( book => book.shelf === "read")

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BookShelf
                books={ currentBooks }
                shelfChange={this.state.shelfChange}
                notifyShelfChange={() => this.onShelfChange() }
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BookShelf
                books={ wantToBooks }
                shelfChange={this.state.shelfChange}
                notifyShelfChange={() => this.onShelfChange() }
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BookShelf
                books={ readBooks }
                shelfChange={this.state.shelfChange}
                notifyShelfChange={() => this.onShelfChange() }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default BookList
