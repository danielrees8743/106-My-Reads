import Book from './Book';

//* Adds the books to the shelves and adds them to the list of books in the correct shelf category
const Shelf = ({ books, title, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} updateBookShelf={updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
