import React, { useEffect, useState } from 'react'
import BookItem from './BookItem';
import axios from 'axios'

const BookList = () => {
    const[books, setBooks] = useState([]);

    const fetchBooks = async() => {
        const response = await axios(`${process.env.REACT_APP_URL}?api-key=${process.env.REACT_APP_API_KEY}`);
        setBooks(response.data.results.books);
        console.log(response.data.results.books)
    }

    // make api calls
    useEffect(() => {
        fetchBooks();
    }, []); /*empty array ensures useEffect
            only runs when a component mounts
            */

    return (
        <div className='flex-container py-5'>
            {books.map( (book, i) => {
                return <BookItem key={i} book={book} />;
            })
            }
        </div>
    )
}

export default BookList;