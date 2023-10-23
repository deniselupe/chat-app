import dotenv from "dotenv";
import helmet from "helmet";
import express, { Request, Response } from "express";
import { createServer } from "node:http";
import authRoutes from "./routers/authRoutes";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const server = createServer(app);

app.use(helmet());
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express.js!");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
