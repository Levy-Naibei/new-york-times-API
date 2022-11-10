import React from 'react'
import '../App.css';

const BookItem = (props) => {
    const { book } = props;
    const { publisher, description, title, book_image } = book;

    return (
        <div className='book'>
            <div className="media">
                <img src={book_image} className='mr-3 mt-3' style={{ width: '100px' }} alt='book-img' />
                <div className="media-body">
                    <h5><i>{title}</i></h5>
                    <p>{publisher}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BookItem;

