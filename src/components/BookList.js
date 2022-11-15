import React from 'react'
import BookItem from './BookItem';

const BookList = (props) => {
    return (
        <div className='flex-container py-5'>
            { props.books.map( (book, i) => {
                return <BookItem key={i} book={book} />;
            })
            }
        </div>
    )
}

export default BookList;