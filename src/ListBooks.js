import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component{
    debugger;
    static propTypes = {
         books: PropTypes.array.isRequired,
         updateBook: PropTypes.func.isRequired
    }
    render() {
        const { books, updateBook } = this.props
        debugger;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div key="currentlyReading" className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books.filter((book) => (book.shelf === 'currentlyReading')).map((book) => (
                                <Book 
                                    key= {book.id}
                                    book={ book }
                                    updateBook={ updateBook }
                                />
                            ))}
                        </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div key="wantToRead" className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books.filter((book) => (book.shelf === 'wantToRead')).map((book) => (
                                <Book
                                    key= {book.id}
                                    book={book}
                                    updateBook={ updateBook }
                                />
                            ))}
                        </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div  key="read" className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                books.filter((book) => (book.shelf === 'read')).map((book) => (
                                <Book 
                                    key= {book.id}
                                    book={book}
                                    updateBook={ updateBook }
                                />
                            ))}
                        </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link
                    to='/searchBook'>
                    Add a book
                </Link>
            </div>
          </div>
        )
    }
}

export default ListBooks