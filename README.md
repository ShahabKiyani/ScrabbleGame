# 🧩 ScrabbleGame

A simple multiplayer Scrabble game implemented with vanilla JavaScript for the frontend and Node.js for the backend. It features dictionary validation, scoring mechanics, and multiplayer game state management.

## 🚀 Features

- 📝 Word validation using a dictionary  
- 🎯 Scrabble-style scoring system  
- 🎲 Game rack and board logic  
- 🧠 Game state managed in a simple store  
- 🌐 Backend using Node.js with simple file-based storage  

## 📁 Project Structure

ScrabbleGame-main/
│
├── js/ # Legacy script (e.g. submit.js)
├── node_modules/ # Node.js dependencies
├── src/
│ ├── client/ # All frontend logic
│ │ ├── index.html # Main HTML file
│ │ ├── main.css # Styling
│ │ ├── main.js # Entry point for JS
│ │ ├── game.js # Board and game logic
│ │ ├── rack.js # Tile rack logic
│ │ ├── scoring.js # Score calculation
│ │ ├── dictionary.* # Word list and lookup logic
│ │ └── ... # Other utilities
│ └── server/
│ ├── index.js # Main server file
│ └── database.js # Simple file/database I/O
│
├── package.json # Project metadata and dependencies
└── package-lock.json # Exact dependency versions

shell
Copy
Edit

## 🛠️ Setup Instructions

### 1. Install dependencies

```bash
npm install
2. Run the server
bash
Copy
Edit
node src/server/index.js
The server will typically run on http://localhost:3000

3. Open the game in a browser
Open src/client/index.html directly in your browser or serve it via a static file server like:

bash
Copy
Edit
npx serve src/client
🧪 Technologies Used
HTML/CSS/JS (Vanilla)

Node.js

File system I/O for data persistence

📜 License
MIT
