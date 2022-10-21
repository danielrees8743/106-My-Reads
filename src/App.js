/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookShelves from './components/BookShelves';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  //* Get all books from the server on render on page
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  //* Updates books on the shelf and on the server
  const updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const newBook = { ...book, shelf };

      setBooks((books) =>
        books.filter((b) => b.id !== book.id).concat(newBook)
      );
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          updateBookShelf={updateBookShelf}
          books={books}
        />
      ) : (
        <BookShelves books={books} updateBookShelf={updateBookShelf} />
      )}
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}

export default App;
