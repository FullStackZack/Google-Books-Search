import React, { Component } from 'react';
import API from '../utils/API'
import Items from '../components/List/SavedBooks'

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
    _id: ""
  };

  componentDidMount() {
    console.log('mounted');
    this.loadBooks();
  };

  loadBooks() {
    API.getAllBooks()
      .then(res => {
        console.log('data', res.data);
        this.setState({ 
          books: res.data, 
          title: res.data.title,
          authors: res.data.author,
          description: res.data.description,
          image: res.data.image,
          link: res.data.link,
          _id: res.data._id
        })
    })
  };

  render() {
    return (
      <div class='container'>
        {this.state.books.map(book => 
          <Items 
            title={book.title} 
            author={book.authors} 
            description={book.description} 
            link={book.link} 
            image={book.image}
            id={book._id}
        />  
        )}      
      </div>
    )
  }

}

export default Saved;