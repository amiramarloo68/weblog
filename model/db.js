import { Sequelize, DataTypes } from "sequelize";
import { db } from "../config.js";
const { database, password, name } = db;
const sequelize = new Sequelize(database, name, password, {
  dialect: "mysql",
});

export { sequelize };
