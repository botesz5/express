import { Router } from "express";
import {getAll, deleteUser} from "./controller.js";

const router = Router();

router.get("/user", getAll);
router.delete("/user/:id", deleteUser);
router.post("/users", addUser)

export default router;

