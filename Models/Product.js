import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model {}

Product.init(
  {
    name: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    description: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    category: {
      type: DT.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Product",
  }
);

export default Product;
