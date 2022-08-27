import { Strategy as LocalStrtegy } from "passport-local";
import bcrypt from "bcrypt";

import { person } from "../model/user.js";

function initializePassport(passport) {
  async function authPassport(email, password, done) {
    const user = await person.findOne({ where: { email } });
    if (!user) {
      return done(null, false, { message: "Not Found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "email or pasword is in correct" });
    }
  }
  passport.use(new LocalStrtegy({ usernameField: "email" }, authPassport));

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    return done(null, person.findByPk(id));
  });
}

export { initializePassport };
