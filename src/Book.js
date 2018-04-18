import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Book extends Component {
    handleChange =(e) =>{
        e.preventDefault()
        this.props.updateBook(this.props.book.id,e.currentTarget.value);
    }
    render(){
        const { book } = this.props

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
                            book.authors.map((author)=>{
                                <span>{author},</span>
                            })
                        ):''}
                    </div>
                </div>
            </li>
        )
    }
}

export default Book