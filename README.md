# 📚 BookShare – A Mini Full Stack Book Sharing App

BookShare is a beginner-friendly full-stack web application that allows users to **share**, **search**, and **manage** books. It supports two types of users: **Owners** who list books, and **Seekers** who find and borrow books.

---

## 🚀 Features

- 🔐 Login(for existing users) and Signup(For new users)
- 👤 Separate dashboards for Owners and Seekers
- 📘 List books with title, author, genre, contact, etc.
- 📄 Edit and delete book listings
- 🌐 Frontend built with **Next.js + React**
- 🧠 Backend built with **Node.js + Express**
- 💾 Data stored in simple JSON files
- 🎨 Clean, responsive UI with **Tailwind CSS**

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | Next.js + React     |
| Styling    | Tailwind CSS        |
| Backend    | Node.js + Express   |
| Data Store | JSON (File-based)   |

---

## 📂 Project Structure

bookshare-app/
 ├── backend/ 
 │ ├── server.js 
 │ ├── users.json 
 │ └── books.json 
 └── frontend/
     ├── app/ 
        └── components/ 
          └── Navbar.js 
          └── Footer.js
        └──dashboard-owner/ 
          └── page.js 
        └── dashboard-seeker/ 
          └── page.js 
        └── login/ 
          └── page.js 
        └── signup/ 
          └── page.js 
        ├── globals.css
        ├── layout.js
        └── page.js
     ├── public


---

## ⚙️ Getting Started

### 📦 1. Clone the Repo
```bash
git clone "Repo_link"
cd bookshare-app

## BACKEND SETUP
cd backend
npm install
node server.js

✅ Server runs on: http://localhost:5000

## FRONTEND SETUP
cd ../frontend
npm install
npm run dev

✅ App runs on: http://localhost:3000

🙋‍♀️ How to Use
Sign up as Owner or Seeker

Log in and explore your dashboard

Owners can list, edit, or delete books

Seekers can browse available books
________________________________________________
AI Tools referred

ChatGPT
Claude AI
________________________________________________
Future Improvements/Works

Full Auth flow
Image uploads for book listings
Real database (e.g. MongoDB,MySQL)
Deployment (e.g. Vercel + Render)