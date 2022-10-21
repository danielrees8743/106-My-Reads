import { useState, useEffect } from 'react';
const Book = ({ book, updateBookShelf }) => {
  const [shelf, setShelf] = useState(book.shelf);
  const [image] = useState(
    'http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  );

  //* Puts the book on the correct shelf and updates the server with the new shelf category when the book is moved
  //* using the updateBookshelf function

  const updateShelf = (e) => {
    setShelf(e);
  };

  useEffect(() => {
    if (book.shelf !== shelf) {
      updateBookShelf(book, shelf);
    }
  }, [book, shelf, updateBookShelf]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundSize: '128px 193px',
            backgroundImage: `url( ${
              book.imageLinks ? book.imageLinks.thumbnail : image
            } )`,
          }}
        ></div>

        <div className="book-shelf-changer">
          <select
            defaultValue={shelf}
            onChange={(e) => updateShelf(e.target.value)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
