import Shelf from './Shelf';
import './bookShelves.css';

//* Filters the books by shelf and passes them to the Shelf component
const BookShelves = ({ books, updateBookShelf }) => {
  const filterShelves = (shelf) => {
    const bookShelf = books.filter((book) => book.shelf === shelf);
    return bookShelf;
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            books={filterShelves('currentlyReading')}
            title={'Currently Reading'}
            updateBookShelf={updateBookShelf}
          />
          <Shelf
            books={filterShelves('wantToRead')}
            title={'Want To Read'}
            updateBookShelf={updateBookShelf}
          />
          <Shelf
            books={filterShelves('read')}
            title={'Read'}
            updateBookShelf={updateBookShelf}
          />
        </div>
      </div>
    </div>
  );
};

export default BookShelves;
