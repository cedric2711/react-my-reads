import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
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
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <ListBooks 
            books={this.state.books}
            getBooksInShelf={this.getBooksInShelf}
          />)}
        />
        <Route path='/search' render={(history) =>(
          <SearchBooks 
            books={this.state.books}
            getBooksInShelf={this.getBooksInShelf}
          />)}
        />
      </div>
    )
  }
}

export default BooksApp
