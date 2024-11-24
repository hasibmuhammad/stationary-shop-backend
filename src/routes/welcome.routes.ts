import express from "express";
import { welcomeControllers } from "../controllers/welcome.controllers";
const router = express.Router();

router.get("/", welcomeControllers.welcome);

export const welcomeRoutes = router;
