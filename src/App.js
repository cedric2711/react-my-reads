import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books:[]
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
