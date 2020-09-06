import React, { Component } from 'react'
import BookItem from './BookItem';

export default class BookList extends Component {
    state = {
        books:[]
    }
    async componentDidMount(){
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
        //const apiKey = API_KEY;
        const data = await fetch(`${url}?api-key=${process.env.REACT_APP_API_KEY}`)
                        .then((response) => response.json());
        this.setState(() => {
            return {
                books: data.results.books
            };
        })
    }
    
    render() {        
        const {books} = this.state;

        console.log("books here ", books)

        return (
            <div className='flex-container py-5'>
                {books.map( (book, i) => {
                    return <BookItem key={i} book={book} />;
                })
                }
            </div>
        )
    }
}