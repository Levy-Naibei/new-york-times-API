import React from 'react'
import '../App.css';
import BookList from './BookList';
import Search from './Search';

const Book = (props) => {
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>NYT list of Best-selling books</h3>
            <div className='text-center'>
                <Search books={props.books} />
            </div>
            <BookList />
        </div>
    )
}

export default Book;
