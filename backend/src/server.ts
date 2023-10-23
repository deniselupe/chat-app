import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { createServer } from "node:http";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express.js!");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
