import React from 'react'
import '../App.css';

const BookItem = (props) => {
    const { book } = props;
    const { publisher, description, title, book_image, amazon_product_url } = book;

    return (
        <div className='book'>
            <div className="media">
                <img src={book_image} className='mr-3 mt-3' style={{ width: '100px' }} alt='book-img' />
                <div className="media-body">
                    <h5 className='title'><i>{title}</i></h5>
                    <p>{publisher}</p>
                    <p className="desc">{description.substring(0, 80) + '...'}</p>
                </div>
            </div>
            <div id="order_link">
                <a href={amazon_product_url}
                    target='_blank' rel='noopener noreferrer'>
                    <button id='order'>Order</button>
                </a>
            </div>
        </div>
    )
}

export default BookItem;

