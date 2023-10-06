import express, { Request, Response } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const PORT = 8000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express.js");
});

io.on("connection", (socket) => {
    console.log("a user has connected");

    socket.on("new-message", (message) => {
        console.log(message);
        io.emit("incoming-message", message);
    });

    socket.on("disconnect", () => {
        console.log("a user has disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
