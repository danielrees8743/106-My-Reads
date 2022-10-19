import Book from './Book';

const Shelf = () => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
      </ol>
    </div>
  );
};

export default Shelf;
