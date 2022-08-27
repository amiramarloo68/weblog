import { person } from "../model/user.js";
import {  Post} from "../model/post.js";

export class Blog {
  static loginPage(req, res) {
    res.render("login");
  }
  static registerPage(req, res) {
    res.render("register");
  }
  static async login(req, res) {
    const users = await person.findAll();
    res.render("dashboard", { users });
  }
}
