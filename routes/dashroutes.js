import { Router } from "express";

import { Dashboard } from "../controllers/dashboardController.js";

const router = Router();

router.get("/", Dashboard.dash);

export default router;
