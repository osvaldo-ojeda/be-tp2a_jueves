import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  // async validatePassword(passwordtextoPlano) {
  //   return await bcrypt.compare(passwordtextoPlano, this.password);
  // }

  // async validatePassword(passwordtextoPlano, passwordHash) {
  //   return await bcrypt.compare(passwordtextoPlano, passwordHash);
  // }
  async validatePassword(passwordtextoPlano) {
    const passwordHass = await bcrypt.hash(passwordtextoPlano, this.salt);
    return this.password === passwordHass;
  }
}

User.init(
  {
    name: {
      type: DT.STRING,
      allowNull: false,
    },
    lastName: {
      type: DT.STRING,
      allowNull: false,
    },
    password: {
      type: DT.STRING,
      allowNull: false,
    },
    email: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DT.STRING,
    },
    role: {
      type: DT.STRING,
      defaultValue:"user"
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const passwordHash = await bcrypt.hash(user.password, salt);
  user.password = passwordHash;
});

export default User;
