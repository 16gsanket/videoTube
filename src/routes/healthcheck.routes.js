import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const router = Router()
console.log('called');

router.route("/").get(healthCheck)

export  default router