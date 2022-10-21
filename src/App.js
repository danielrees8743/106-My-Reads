/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import { useState, useEffect } from 'react';
import BookShelves from './components/BookShelves';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

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

  //* Search for books on the server
  useEffect(() => {
    BooksAPI.search(query).then((results) => {
      if (results && !results.error) {
        setSearchResults(
          results.map((book) => {
            const foundBook = books.find((b) => b.id === book.id);
            if (foundBook) {
              return { ...book, shelf: foundBook.shelf };
            }
            return { ...book, shelf: 'none' };
          })
        );
      } else {
        setSearchResults([]);
      }
    });
  }, [books, query]);

  const searchBooks = (query) => {
    setQuery(query);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
          searchBooks={searchBooks}
          searchResults={searchResults}
          updateBookShelf={updateBookShelf}
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
