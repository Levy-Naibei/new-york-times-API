import React, { Component } from 'react'
import '../App.css';

export default class BookItem extends Component {

    render() {

        const{book} =this.props;
        const{publisher, description, title, book_image} = book;

        return (
            <div className = 'book'>
                <div className="media">
                    <img src={book_image}  className='mr-3 mt-3' style={{width:'100px'}} alt='book-img'/>
                    <div className="media-body">
                        <h5><i>{title}</i></h5>
                        <p>{publisher}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

