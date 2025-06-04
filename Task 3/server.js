import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON request bodies

// In-memory storage
let books = [
  { id: 1, title: "Eloquent JavaScript (3rd Edition)", author: "Marijn Haverbeke" },
  { id: 2, title: "You Don’t Know JS Yet (Series)", author: "Kyle Simpson" },
  { id: 3, title: "HTML and CSS: Design and Build Websites", author: "Jon Duckett" },
  { id: 4, title: "JavaScript and JQuery: Interactive Front-End Web Development", author: "Jon Duckett" },
  { id: 5, title: "Don't Make Me Think (Revisited)", author: "Steve Krug" },
  { id: 6, title: "Learning Web Design (5th Edition)", author: "Jennifer Robbins" },
  { id: 7, title: "The Road to React", author: "Robin Wieruch" },
  { id: 8, title: "CSS Secrets", author: "Lea Verou" },
  { id: 9, title: "Designing with Web Standards", author: "Jeffrey Zeldman" },
  { id: 10, title: "Fullstack D3 and Data Visualization", author: "Amelia Wattenberger" }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DELETE book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.json({ message: 'Book deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
