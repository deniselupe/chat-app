import express, { Request, Response } from "express";
import { getUserData } from "../controllers/authControllers";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("This is /auth route");
});

router.get("/user", getUserData);

export default router;
