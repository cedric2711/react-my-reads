import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{

    state = {
        books: [],
        query: ""
    }

    searchBook=(query)=>{
        BooksAPI.search(query)
          .then((books) =>{
            if(books === undefined){
                books=[];
            }
            books.forEach((book) =>{
              if(book.imageLinks === undefined ){
                  book['defaultImage']=true;
                  book['imageLinks']={thumbnail:""};
              }

              if(book.shelf===undefined){
                book['shelf']="none";
              }
            })
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
                {(!books || books.error)?
                    <div>The Books is not available </div>
                    :
                    <ol className="books-grid">
                    {
                        books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
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
