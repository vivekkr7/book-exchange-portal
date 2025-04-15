const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = './users.json';
const BOOKS_FILE = './books.json';

// Signup route
app.post('/signup', (req, res) => {
  const { name, mobile, email, password, role } = req.body;

  if (!name || !mobile || !email || !password || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE));
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ name, mobile, email, password, role });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.status(201).json({ message: 'Signup successful' });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    res.json({ message: 'Login successful', role: user.role });
  });

// Add new book (Owner only)
app.post('/books', (req, res) => {
    const { title, author, genre, location, contact, ownerEmail } = req.body;
  
    if (!title || !author || !location || !contact || !ownerEmail) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    const books = JSON.parse(fs.readFileSync(BOOKS_FILE));
   books.push({ title, author, genre, location, contact, ownerEmail, status: 'Available' });

    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
  
    res.status(201).json({ message: 'Book listed successfully' });
  });
  
  // Get all books for a specific owner
  app.get('/books/:ownerEmail', (req, res) => {
    const { ownerEmail } = req.params;
    const books = JSON.parse(fs.readFileSync(BOOKS_FILE));
    const userBooks = books.filter(book => book.ownerEmail === ownerEmail);
    res.json(userBooks);
  });

// Get all books (for seekers)
app.get('/books', (req, res) => {
    const books = JSON.parse(fs.readFileSync(BOOKS_FILE));
    res.json(books);
});

// Update a book listing
app.put('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const books = JSON.parse(fs.readFileSync(BOOKS_FILE));
  
    if (index < 0 || index >= books.length) {
      return res.status(404).json({ message: 'Book not found' });
    }
  
    books[index] = { ...books[index], ...req.body };
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
    res.json({ message: 'Book updated' });
  });
  
  // Delete a book listing
  app.delete('/books/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const books = JSON.parse(fs.readFileSync(BOOKS_FILE));
  
    if (index < 0 || index >= books.length) {
      return res.status(404).json({ message: 'Book not found' });
    }
  
    books.splice(index, 1);
    fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
    res.json({ message: 'Book deleted' });
  });
  

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
