import { Category } from "../Models/index.js";

const categorySeed = async () => {
  try {
    await Category.bulkCreate([
      {
        name: "Teclados",
      },
      {
        name: "Parlantes",
      },
      {
        name: "Monitores",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

export default categorySeed;
