import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books:[],
    query: ""
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) =>{
        this.setState(() => ({
          books
        }))
      })
  }

  updateBook=(bookId,bookShelf) =>{
    BooksAPI.update({id:bookId},bookShelf)
      .then((books) =>{
        BooksAPI.getAll()
          .then((books) =>{
            this.setState(() => ({
              books
            }))
          })
      })
  }

  searchBook=(query)=>{
    BooksAPI.search(query)
      .then((books) =>{

        this.setState(() => ({
          books,
          query
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
        <Route path='/searchBook' render={() =>(
          <SearchBooks 
            books={this.state.books}
            query={this.state.query}
            updateBook={this.updateBook}
            searchBook={this.searchBook}
          />)}
        />
      </div>
    )
  }
}

export default BooksApp
