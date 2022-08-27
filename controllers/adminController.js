import bcrypt from "bcrypt";

import { person } from "../model/user.js";

export default class User {
  static async add_user(req, res) {
    try {
      const { fullname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await person.create({ fullname, email, password: hashedPassword });
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }

  static async del_user(req, res) {
    try {
      const id = req.params.id;
      const user = await person.destroy({ where: { id } });
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/login");
    }
  }
}
export { User };
