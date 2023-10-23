import express, { Request, Response } from "express";
import { sendToAuth, getUserData } from "../controllers/authControllers";

const router = express.Router();

router.get("/", sendToAuth);
router.get("/user", getUserData);

export default router;
