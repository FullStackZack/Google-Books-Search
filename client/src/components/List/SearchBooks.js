import React from 'react';
import API from '../../utils/API'

function List (props) {
    const styles ={
        marginLeft:{
            marginRight: 1000
        }
    }

    const saveBook = (event) => {
        event.preventDefault();
        const bookInfoArr = event.target.value;
        const bookInfo = bookInfoArr.split(',');
        console.log(bookInfo);
        API.saveBook({
            authors: bookInfo[1],
            description: event.target.name,
            image: bookInfo[2],
            link: bookInfo[3],
            title: bookInfo[0]
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    return (
        <div >
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style={styles.marginLeft}>Books</h5>
                    <ul className="list-group"> 
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h4>{props.title}</h4>
                                    
                                    <h6>Written by: {props.author}</h6>
                                </div>
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4">
                                    <button type='button' className="btn mr-1 btn-dark" onClick={ saveBook } name={props.description} value={ [props.title, props.author[0], props.image, props.link] }>Save</button>
                                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button type='button' className="btn mr-1 btn-dark">View</button></a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4"><img alt="book_image" src={props.image}></img></div>
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