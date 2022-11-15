import React from 'react'

export const Search = ({ books }) => {
    const [book, setBooks] = React.useState({ query: '', matches: [] });

    const handleSearch = (e) => {
        const searchWord = e.target.value;
        const results = books.filter(book => {
            if (searchWord === '') return books;
            return book.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        setBooks({ query: searchWord, matches: results });
        console.log('filtered books', book.matches);
    }

    return (
        <div className="search">
            <input
                type="search"
                placeholder="Search by title"
                onChange={handleSearch}
                name={book.query}>
            </input>
        </div>
    )
}

export default Search;
