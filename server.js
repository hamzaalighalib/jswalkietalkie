// server.js
// Install dependencies: npm install ws express
const WebSocket = require("ws");
const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Users: { name, ws, mutedBy: [] }
let users = [];

// Serve static index.html and other static files
// serve static files from ./public (better than __dirname)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

function broadcastJSON(data) {
    const msg = JSON.stringify(data);
    wss.clients.forEach((c) => {
        if (c.readyState === WebSocket.OPEN) c.send(msg);
    });
}

// Broadcast current users
function broadcastUsers() {
    const list = users.map((u) => ({
        name: u.name,
        mutedBy: u.mutedBy,
    }));
    broadcastJSON({ type: "users", users: list });
}

wss.on("connection", (ws) => {
    ws.on("message", (msg) => {
        try {
            const data = JSON.parse(msg.toString());

            // User joins
            if (data.type === "join") {
                ws.username = data.name;
                ws.mutedBy = [];
                users.push({ name: data.name, ws, mutedBy: [] });
                console.log(`${data.name} joined`);
                broadcastUsers();
                return;
            }

            // Toggle mute/unmute a user
            if (data.type === "toggle-mute") {
                const target = users.find((u) => u.name === data.target);
                if (target) {
                    if (target.mutedBy.includes(ws.username)) {
                        target.mutedBy = target.mutedBy.filter(
                            (u) => u !== ws.username,
                        );
                    } else {
                        target.mutedBy.push(ws.username);
                    }
                    broadcastUsers();
                }
                return;
            }
        } catch (e) {
            // Binary frame (audio or video)
            // Broadcast to all clients except sender.
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN && client !== ws) {
                    client.send(msg);
                }
            });
        }
    });

    ws.on("close", () => {
        users = users.filter((u) => u.ws !== ws);
        broadcastUsers();
        console.log(`${ws.username} left`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
);
