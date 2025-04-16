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
- 💻 Deployed on **Vercel + Render** (Live link - **https://book-share-frontend-ivory.vercel.app**)

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

book-exchange-portal/
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
cd book-exchange-portal

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
Sign up as Owner or Seeker.

Log in and explore your dashboard.

Owners can list, edit, delete and mark book as Available/Rented.

Seekers can browse available books and see the status whether Available/Rented.
________________________________________________
AI Tools referred

ChatGPT
Claude AI
________________________________________________
Future Improvements/Works

Full Auth flow
Image uploads for book listings
Real database (e.g. MongoDB,MySQL)
________________________________________________
Snapshots of Application
![image](https://github.com/user-attachments/assets/1f06d986-c6ab-41b8-a5c3-aae6a6d70ff2)
![image](https://github.com/user-attachments/assets/54c09f7d-fda0-4180-9b38-a9a7a7bb4101)
![image](https://github.com/user-attachments/assets/9af41fbd-7fb6-47c0-8f18-82c93ab9b702)
![image](https://github.com/user-attachments/assets/df2549f2-cb59-4e67-a45a-4103d882ac55)
![image](https://github.com/user-attachments/assets/f8f8eec9-bc43-4034-8c46-fd57b58525db)
![image](https://github.com/user-attachments/assets/08ae9f1b-6c8a-46da-a282-7f1841352a9a)
![image](https://github.com/user-attachments/assets/065da4d8-93cd-4fea-ba3a-0f6f40c12fad)






