/* eslint-disable jsx-a11y/anchor-is-valid */
import Shelf from './Shelf';

//* This is the search page component that is rendered when the search button is clicked on the main page
//* It contains the search bar and the search results that are rendered in the Shelf component

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
