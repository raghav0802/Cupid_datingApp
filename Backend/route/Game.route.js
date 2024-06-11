import express from "express";
import { getGame } from "../controller/game.controller.js";

const router=express.Router()

router.get("/",getGame);

export default router;