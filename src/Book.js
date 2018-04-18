import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        getBooksInShelf: PropTypes.func
    }
    state={
        book:this.props.book
    }
    handleChange =(e) =>{
        e.preventDefault()
        BooksAPI.update({id:this.props.book.id}, e.currentTarget.value)
        .then((books) =>{
          if(window.location.pathname==="/"){
            this.props.getBooksInShelf()
          }else{
            this.updateBookState(this.props.book.id)
          }
        })
    }
    updateBookState = (bookId) =>{
        BooksAPI.get(bookId)
            .then((book) => {
                this.setState(() => ({
                    book
                }))
            })
    }
    render(){
        const { book } = this.state
        if(book.imageLinks === undefined ){
            book['imageLinks']={thumbnail:"./icons/no_image_found.png"};
        } 
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                        <select value={book.shelf===undefined? "none" : book.shelf} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors?(
                            book.authors.map((author,index,totalAuth)=>{
                                let surfix='';
                                if(index<totalAuth.length-1){
                                    surfix=',';
                                }
                                return  <span key={author} className="book-author-name">{author+surfix}</span>
                            })
                        ):''}
                    </div>
                </div>
            </li>
        )
    }
}

export default Book