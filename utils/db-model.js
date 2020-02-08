const db = require("./db-config.js");

const getRecipes = () => {
  console.log("db-model>getRecipes");
  return db("recipes");
};

const getShoppingList = recipe_id => {
  console.log("db-model>getShoppingList");

  return db("ingredient_list")
    .select("ingredients.ingredient_name")
    .where({ recipe_id })
    .join("ingredients", "ingredients.id", "ingredient_list.ingredient_id");
};

const getInstructions = recipe_id => {
  console.log("db-model>getInstructions");

  return db("instructions")
    .select("instructions.step", "instructions.id")
    .where({ recipe_id })
    .join("recipes", "recipes.id", "instructions.recipe_id");
};

const getRecipesByIngredient = ingredient_id => {
  console.log("db-model>getRecipesByIngredient", ingredient_id);

  return (
    db("ingredient_list as iL")
      .join("recipes", "recipe_id", "ingredient_id")
      .where({ ingredient_id: ingredient_id })
      // .join("ingredients", "ingredient_id", "ingredient_name")
      .select("recipe_name", "iL.QTY")
  );
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};
