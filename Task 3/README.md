# 📚 Book Management REST API – Node.js + Express

A simple **REST API** to manage a list of books built with **Node.js** and **Express.js**. This project demonstrates basic **CRUD operations** (Create, Read, Update, Delete) using in memory storage without database required.

---

## 🌐 API Overview

- **GET** `/books` – Get all books  
- **POST** `/books` – Add a new book  
- **PUT** `/books/:id` – Update a book by ID  
- **DELETE** `/books/:id` – Delete a book by ID  

Test and explore endpoints using **Postman** or any REST client.

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Postman](https://www.postman.com/) 

---

## 📁 Project Structure

Task 3/
├── server.js 
├── package.json 
└── README.md 

Server will run at: http://localhost:3000

## 📦 Sample Data
[
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": 2,
    "title": "Clean Code",
    "author": "Robert C. Martin"
  }
]

## 📬 API Endpoints
Post

{
  "title": "Zero to One",
  "author": "Peter Thiel"
}

PUT /books/1

{
  "title": "The Alchemist (Updated)"
}

❌ DELETE /books/2

{
    "message": "Book deleted successfully"
}
