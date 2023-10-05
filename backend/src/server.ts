import express, { Request, Response } from "express";
import { createServer } from "node:http";

const PORT = 8000;
const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express.js");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
