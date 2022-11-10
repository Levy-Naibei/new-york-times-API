import React from 'react';
import BookList from './components/BookList';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [books, setBooks] = React.useState([]);

  const fetchBooks = async () => {
    const response = await axios(`${process.env.REACT_APP_URL}?api-key=${process.env.REACT_APP_API_KEY}`);
    setBooks(response.data.results.books);
  }

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='container mt-5 text-center'>
      <h3>NYT list of Best-selling books</h3>
      <Search books={books} />
      <BookList books={books} />
    </div>
  );
}

export default App;

