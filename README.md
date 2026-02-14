# jswalkietalkie
Real-time browser walkie-talkie using JavaScript, MediaStream, and a Node.js WebSocket server. Open the page and talk with anyone instantly


## SEO ideas to go viral

Use these phrases in README, repo description, and your website:

- Repo description:  
  `Real‑time browser walkie‑talkie using JavaScript, WebSockets, and Node.js. Open the page and talk with anyone instantly.`  
- Add tags in README:  
  `walkie talkie`, `browser walkie talkie`, `javascript websocket`, `voice chat`, `open source`, `nodejs audio chat`.  
- Create a small demo page (GitHub Pages or Vercel) and link it from README with a GIF showing two tabs talking.  
- Share in communities: r/javascript, r/webdev, Dev.to, Twitter/X, and relevant Discord servers with a short video demo.

If you want, send me your exact current code and I’ll customize these files perfectly to match your implementation.

# JS Walkie Talkie

JS Walkie Talkie is a real-time **browser walkie‑talkie** built with plain JavaScript and a Node.js WebSocket server. Anyone who opens the page can instantly talk with each other using live voice in the browser. No signup, no login – just open the link, allow your mic, and start talking.

## Features

- Real-time voice chat in the browser
- Press-and-hold push‑to‑talk style like a walkie‑talkie
- No accounts or rooms, everyone on the page hears you
- Built with JavaScript, Node.js, Express, and `ws`
- Simple codebase, easy to learn and modify

## Tech Stack

- Frontend: HTML, CSS, JavaScript, MediaStream API
- Backend: Node.js, Express, WebSocket (`ws`)

## How to install

1. Make sure you have Node.js and npm installed on your system.
2. Clone this repository:

3.  ```bash git clone https://github.com/hamzaalighalib/jswalkietalkie.git \n      cd jswalkietalkie```

  5. ```npm install```

6. ```node server.js ```

7. http://localhost:3000


8. Allow microphone permission when the browser asks.
9. Open the same URL in another tab or another device – now press and hold the talk button and enjoy real‑time voice chat.\
 
 ## How it works
The browser uses getUserMedia to capture your microphone.
Audio is recorded in small chunks and sent over WebSocket to the Node.js server.
The Node.js server broadcasts the audio chunks to all connected clients.
Other clients play the incoming audio, so it feels like a walkie‑talkie.

## Commands

```npm install``` -- install all project dependencies.
```node server.js``` – run the WebSocket + HTTP server.


## SEO keywords


browser walkie talkie

javascript walkie talkie

websocket voice chat

nodejs audio chat

real time voice chat in browser

push to talk web app


Demo  ScreenShot

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/9f998577-17e5-4eec-b101-2411b45d295f" />


by @hamzaalighalib













