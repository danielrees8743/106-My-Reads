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

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // book.shelf = shelf;
      const newBook = { ...book, shelf };

      setBooks((books) =>
        books.filter((b) => b.id !== book.id).concat(newBook)
      );
    });
  };

  useEffect(() => {
    console.log(query);
    BooksAPI.search(query).then((results) => {
      if (results && !results.error) {
        console.log(results);
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
  }, [query]);

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
