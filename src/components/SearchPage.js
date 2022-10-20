/* eslint-disable jsx-a11y/anchor-is-valid */
import Shelf from './Shelf';

const SearchPage = ({
  showSearchPage,
  setShowSearchpage,
  searchBooks,
  searchResults,
  updateBookShelf,
}) => {
  const handleChange = (e) => {
    searchBooks(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => {
            setShowSearchpage(!showSearchPage);
            searchBooks('');
          }}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Shelf books={searchResults} updateBookShelf={updateBookShelf} />
      </div>
    </div>
  );
};

export default SearchPage;
