import React from 'react';
import BookList from './BookList';
import BookItem from './BookItem';

export const Search = ({ books }) => {
    const [book, setBooks] = React.useState({ query: '', matches: [] });

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        const results = books.filter(book => {
            if (searchWord === '') return books;
            return (
                book.title.toLowerCase().includes(searchWord.toLowerCase()) ||
                book.publisher.toLowerCase().includes(searchWord.toLowerCase())
            );
        });
        setBooks({ query: searchWord, matches: results });
        console.log('filtered books', book.matches);
    }

    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search by title or publisher"
                onChange={handleSearch}
                name={book.query}>
            </input>
            <div className="search_results">
                <ul>
                    {
                        (
                            book.query === '' ? <BookList books={books} />
                                : !book.matches.length ? <p className="py-5">No search results found!</p>
                                    : book.matches.map((book, index) => {
                                        return (
                                            <div id="search_results">
                                                <BookItem key={index} book={book} />
                                            </div>
                                        )
                                    })
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Search;
