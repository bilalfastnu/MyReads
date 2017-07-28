import React, { Component } from 'react';
import PropTypes from 'prop-types'


class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  state =  {  value: 'Move to...'}

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log("change to", this.state.value)
  }
  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
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
