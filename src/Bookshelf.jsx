import { useState } from 'react'

const Bookshelf = () => {
  // State variables
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Event handlers
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new book to the books array
    setBooks([...books, newBook]);

    // Reset the newBook state to clear the form fields
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="bookshelfDiv">
      {/* Form Section */}
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Enter book title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Enter book author"
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Book Cards Section */}
      <div className="bookCardsDiv">
        <h3>Your Bookshelf</h3>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </div>
          ))
        ) : (
          <p>No books added yet. Add your first book!</p>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
