import { Router } from "express";
import AppController from "./controller/AppController";
const router = Router();

router.post(
  "/user", AppController.getUser
);

export default router;