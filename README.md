# 🧩 ScrabbleGame

A simple multiplayer Scrabble game implemented with vanilla JavaScript for the frontend and Node.js for the backend. It features dictionary validation, scoring mechanics, and multiplayer game state management.

## 🚀 Features

- 📝 Word validation using a dictionary  
- 🎯 Scrabble-style scoring system  
- 🎲 Game rack and board logic  
- 🧠 Game state managed in a simple store  
- 🌐 Backend using Node.js with simple file-based storage  


<pre lang="markdown"> ## 📁 Project Structure ``` ScrabbleGame-main/ ├── js/ │ └── submit.js ├── node_modules/ │ └── ... (installed packages) ├── src/ │ ├── client/ │ │ ├── index.html │ │ ├── main.css │ │ ├── main.js │ │ ├── game.js │ │ ├── rack.js │ │ ├── scoring.js │ │ ├── dictionary.js │ │ ├── dictionary.json │ │ ├── scrabbleUtils.js │ │ └── store.js │ └── server/ │ ├── index.js │ └── database.js ├── package.json ├── package-lock.json └── .DS_Store ``` </pre>

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
