import Product from "../Models/Product.js";

class ProductController {
  constructor() {}
  getAllProduct = async (req, res) => {
    try {
      const result = await Product.findAll();
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
        where: {
          id,
        },
      });
      //   console.log(
      //     "🚀 ~ file: ProductController.js:30 ~ ProductController ~ getProductById= ~ result:",
      //     result[0].dataValues
      //   );
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
}

export default ProductController;
