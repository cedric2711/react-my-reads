import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books:[]
  }
  getBooksInShelf =() =>{
    BooksAPI.getAll()
    .then((books) =>{
      this.setState(() => ({
        books
      }))
    })
  }
  componentDidMount() {
    this.getBooksInShelf()
  }

  updateBook=(bookId,bookShelf) =>{
    BooksAPI.update({id:bookId},bookShelf)
      .then((books) =>{
        if(window.location.pathname==="/"){
          this.getBooksInShelf()
        }
      })
  }

  searchBook=(query)=>{
    BooksAPI.search(query)
      .then((books) =>{
        this.setState(() => ({
          books
        }))
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <ListBooks 
            books={this.state.books}
            updateBook={this.updateBook}
          />)}
        />
        <Route path='/search' render={(history) =>(
          <SearchBooks 
            books={this.state.books}
            updateBook={this.updateBook}
            searchBook={this.searchBook}
          />)}
        />
      </div>
    )
  }
}

export default BooksApp
