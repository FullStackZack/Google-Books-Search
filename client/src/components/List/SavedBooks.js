import React from 'react';
import API from '../../utils/API'

function List(props) {
    const loadBooks = () => {
      API.getAllBooks()
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  
    const deleteBook = (id) => {
      console.log('delete btn');
      console.log(id);
      API.deleteBook(id)
        .then(res => {
          loadBooks()
          window.location.reload(false);
        })
        .catch(err => console.log(err))
    }

    return (
      <div >
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Saved Book</h5>
            <ul className="list-group"> 
              <li className="list-group-item">
                <div className="row">
                  <div className="col-lg-4">
                    <h4>{props.title}</h4>
                    
                    <h6>Written by: {props.author}</h6>
                  </div>
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4">
                    <button type='button' className="btn mr-1 btn-dark" onClick={ () => deleteBook(props.id)  }>Delete</button>
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button type='button' className="btn mr-1 btn-dark">View</button></a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4"><img alt="book_image"src={props.image}></img></div>
                  <div className="col-lg-8"><p>{props.description}</p></div>
                </div>
              </li>
              <br></br>
            </ul>
          </div>
        </div>
      </div>
      )
}

export default List;