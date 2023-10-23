import express, { Request, Response } from "express";
import { getUserData } from "../controllers/authController";

const router = express.Router();

router.get("/user", getUserData);

export default router;
