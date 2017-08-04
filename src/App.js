import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Link } from 'react-router-dom'
import Search from './Search'

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
    console.log("State change in App.js")
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={( { history }) => (
          <Search
            shelfChange={this.state.shelfChange}
            notifyShelfChange={() => this.onShelfChange() }
          />
        )} />
        <Route exact  path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList books={ books } />
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
