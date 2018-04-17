import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component{
    debugger;
    static propTypes = {
         books: PropTypes.array.isRequired,
         query: PropTypes.string.isRequired,
         updateBook: PropTypes.func.isRequired,
         searchBook: PropTypes.func.isRequired
    }

    updateQuery=(query) =>{
        this.props.searchBook(query);
    }
    render() {
        const { books, query, updateBook, searchBook } = this.props
        debugger;
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e)=> this.updateQuery(e.currentTarget.value)}
                        />

                </div>
            </div>
            <div className="search-books-results">
                {books.error? 
                    <div>refine the search string </div>
                    :
                    <ol className="books-grid">
                    {
                        books.map((book) => (
                        <Book 
                            key= {book.id}
                            book={book}
                            updateBook={ updateBook }
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