const port = process.env.PORT;

import express from "express";
import "dotenv/config";
import passport from "passport";
import session from "express-session";
import flash from "express-flash";

import { initializePassport } from "./config/passport-Config.js";
import "./model/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dashRoutes from "./routes/dashroutes.js";

initializePassport(passport);
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
app.use(passport.initialize());

app.use("/", adminRoutes);
app.use("/dashboard", isAuthenticate, dashRoutes);
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

function isAuthenticate(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}
