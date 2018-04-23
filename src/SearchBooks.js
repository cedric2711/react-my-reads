import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{

    state = {
        books: [],
        query: ""
    }
    componentDidMount() {
        this.props.getBooksInShelf();
    }
    searchBook=(query)=>{
        BooksAPI.search(query)
          .then((books) =>{
            if(books === undefined){
                books=[];
            }
            if(this.props.books){
                books.forEach((book)=>{
                    var bookFound=this.props.books.find(sbook => sbook.id===book.id);
                    if(bookFound)
                        book["shelf"]=bookFound.shelf;
                });
            }
            this.setState(() => ({
              books,
              query
            }))
          })
    }
    updateQuery=(query) =>{
        this.searchBook(query);
    }

    render() {
        const { query, books } = this.state

        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e)=> this.updateQuery(e.currentTarget.value)}
                        />

                </div>
            </div>
            <div className="search-books-results">
                {(!books || books.error)?
                    <div>The Books is not available </div>
                    :
                    <ol className="books-grid">
                    {
                        books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            selectedBooks={this.props.books}
                        />
                    ))}
                    </ol>
                }

            </div>
          </div>
        )
    }
}

export default SearchBooks
