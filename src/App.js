import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: [],
    shelfChange: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  onShelfChange() {
    this.setState({ shelfChange: true })
  }

  render() {
    const { books } = this.state
    let currentBooks = books.filter( book => book.shelf === "currentlyReading")
    let wantToBooks =  books.filter( book => book.shelf === "wantToRead")
    let readBooks = books.filter( book => book.shelf === "read")

    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search"  to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>

        )} />
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookList
                      books={ currentBooks }
                      shelfChange={this.state.shelfChange}
                      notifyShelfChange={() => this.onShelfChange() }
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookList
                      books={ wantToBooks }
                      shelfChange={this.state.shelfChange}
                      notifyShelfChange={() => this.onShelfChange() }
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookList
                      books={ readBooks }
                      shelfChange={this.state.shelfChange}
                      notifyShelfChange={() => this.onShelfChange() }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
