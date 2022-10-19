import Shelf from './Shelf';

const BookShelves = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{}</h2>
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  );
};

export default BookShelves;
