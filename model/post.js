import { DataTypes } from "sequelize";

import { sequelize } from "./db.js";
import { person } from "./user.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

person.hasOne(Post);
sequelize.sync({ alter: true });
export { Post };
