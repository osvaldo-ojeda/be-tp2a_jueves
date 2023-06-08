import { Product, Category } from "../Models/index.js";

class ProductController {
  constructor() {}
  getAllProduct = async (req, res) => {
    try {
      const result = await Product.findAll({
        attributes: ["id", "name", "description", "categoryId"],
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
        ],
      });
      if (result.length === 0) throw new Error("No hay productos");
      res.status(200).send({
        success: true,
        message: "Estos son los productos encontrados",
        result,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Product.findAll({
        attributes: ["id", "name", "description"],
        where: {
          id,
        },
      });
      if (result.length === 0) throw new Error("No hay producto");
      res.status(200).send({
        success: true,
        message: "Este el es producto",
        result: result[0].dataValues,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createProduct = async (req, res) => {
    try {
      const { name, description, categoryId } = req.body;
      const result = await Product.create({ name, description, categoryId });
      if (!result) throw new Error("No se pudo crear el producto");
      res.status(200).send({
        success: true,
        message: "Se creo producto exitosamente",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateProcuct = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, category } = req.body;
      const result = await Product.update(
        { name, description, category },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo modificar el producto");
      res.status(200).send({
        success: true,
        message: "Producto modificado exitosamente",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default ProductController;
