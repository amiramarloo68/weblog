import { Router } from "express";

import { User } from "../controllers/adminController.js";
const router = Router();

router.post("/register", User.add_user);
router.get("/del-user/:id", User.del_user);

export default router;
