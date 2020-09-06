import React, { Component } from 'react'
import '../App.css';
import BookList from './BookList';

export default class Book extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h3 className='text-center'>NYT list of Best-selling books</h3>
                    <BookList />
            </div>
        )
    }
}
