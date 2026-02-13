# 👥 Friends Dashboard (4 Pages Data)

## 📌 Project Overview

This project is a simple Friends Data Dashboard built using:

- HTML
- CSS
- JavaScript

The dashboard displays 4 pages of friends data with search and pagination features.

No external API is used. The data is stored locally inside the JavaScript file.

---

## 🚀 Features

- Display friends in card layout
- 4 pages of data
- Pagination (Previous / Next buttons)
- Search friend by name
- Responsive grid layout
- Clean and simple UI

---

## 📂 Project Structure

friends-dashboard/
│
├── index.html
├── style.css
└── script.js

---

## 🧠 How It Works

1. Friends data is stored in an array inside `script.js`.
2. The app displays 3 friends per page.
3. Pagination logic calculates total pages.
4. Search filters friends by name.
5. DOM is updated dynamically using JavaScript.

---

## 📊 Pagination Details

- Total Friends: 12
- Friends Per Page: 3
- Total Pages: 4

Page Breakdown:

Page 1 → Friends 1–3  
Page 2 → Friends 4–6  
Page 3 → Friends 7–9  
Page 4 → Friends 10–12  

---

## 🔧 How To Run

1. Download or clone the project.
2. Open the folder.
3. Double-click `index.html`.
4. The project will open in your browser.

No installation required.

---

## ✏️ How To Edit Friend Data

Open `script.js` and modify this section:

```javascript
const friends = [
    { id: 1, name: "Friend 1", email: "f1@gmail.com", city: "Hyderabad" },
];
