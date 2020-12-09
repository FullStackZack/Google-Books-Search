import React, {Component, useState} from 'react';
import API from '../utils/API'
import Items from '../components/List/Items'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        books:[]
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        API.getBooks(this.state.value).then(res => this.setState(state =>{
            return {books: res.data.items}
        }))
    }

    render() {return (
        <div className="container">
            <h3>Search a Book</h3>
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button className="btn btn-outline-secondary mt-3 mb-3" onClick={this.handleSubmit} type="button" id="button-addon2">Search</button>
            {this.state.books.map(book => 
                <Items 
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors} 
                    description={book.volumeInfo.description} 
                    link={book.volumeInfo.infoLink} 
                    image={book.volumeInfo.imageLinks.smallThumbnail} 
                />  
                )}           
        </div>
  )
    }
}

export default Search;