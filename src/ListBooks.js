import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component{

    componentDidMount() {
        this.props.getBooksInShelf();
    }
    render() {
        const { books, getBooksInShelf } = this.props
        
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
                                    key={book.id}
                                    book={ book }
                                    getBooksInShelf={ getBooksInShelf }
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
                                    key={book.id}
                                    book={book}
                                    getBooksInShelf={ this.getBooksInShelf }
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
                                    key={book.id}
                                    book={book}
                                    getBooksInShelf={ this.getBooksInShelf }
                                />
                            ))}
                        </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'>
                    Add a book
                </Link>
            </div>
          </div>
        )
    }
}

export default ListBooks