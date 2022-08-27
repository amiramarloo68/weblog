import { person } from "../model/user.js";
export class Dashboard {
  static async dash(req, res) {
    const users = await person.findAll();
    const { fullname } = await req.user;
    res.render("dashboard", { users, loginUser: fullname });
  }
}
