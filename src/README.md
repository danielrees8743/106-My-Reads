# MyReads Project

This is the fianl project for Udacity's React course. The Read me app is an app that tracks the books you are reading, want to read, and have read. The app allows you to search for books and add them to your bookshelf. The app also allows you to move books from one shelf to another.

## TL;DR

To run the project right away:

- Change the directory into the starter folder `cd starter`
- install all project dependencies with `npm install`
- run the development server with `npm start`

## File Contents

```bash
├──Starter # Starter code for the project
├──package.json # npm package manager file
├──public
│  ├──favicon.ico
│  └──index.html
│
└──src
   ├──README.md - This file.
   ├──App.css
   ├──App.js
   ├──BooksAPI.js
   ├──index.css
   ├──index.js
   ├──icons     # Images for the app
   │   ├──add.svg
   │   ├──arrow-back.svg
   │   ├──arrow-drop-down.svg
   │   └──no-image.jpg
   │
   └──components # React components
       ├──book.css
       ├──Book.js
       ├──bookShelf.css
       ├──BookShelf.js
       ├──searchPage.css
       ├──SearchPage.js
       ├──shelf.css
       └──Shelf.js
```

## The Backend Server

The backend server is provided by Udacity. The file [`BooksAPI.js`](starter/src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

### `getAll`

This is the collection that will be shown on the page when the application is first rendered.

```js
getAll();
```

### `update`

This updates the bookshelf for a book in your collection

```js
update(book, shelf);
```

### `search`

This searches the books in the database and returns a collection of books that match the search query... well sort of!

```js
search(query);
```
