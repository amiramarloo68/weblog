import { Router } from "express";
import passport from "passport";

import { Blog } from "../controllers/userController.js";
const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
    failureFlash: true,
  })
);
router.get("/login", Blog.loginPage);
router.get("/", Blog.loginPage);
router.get("/register", Blog.registerPage);

export default router;
