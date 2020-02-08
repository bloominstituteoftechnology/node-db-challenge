const db = require("./db-config.js");

const getAll = endpoint => {
  console.log("db-model>getRecipes", endpoint);
  return db(endpoint);
};

const addNew = async (endpoint, newInput) => {
  // console.log("model > add:", endpoint, newInput);
  //inserts new data, and returns an ID
  const [id] = await db(endpoint).insert(newInput);
  console.log("model > add:", id, endpoint, newInput);
  return findById(endpoint, id);
};

const findById = (endpoint, id) => {
  console.log("model > findById:", id, endpoint);

  switch (endpoint) {
    case "resources":
      console.log("model > resources");
      return db("resources")
        .where({ resource_id: id }) //searching by id
        .first(); //first data that matches
    case "projects":
      console.log("model > projects");
      return db("projects")
        .where({ project_id: id }) //searching by id
        .first(); //first data that matches
    case "tasks":
      console.log("model > tasks");
      return db("tasks")
        .where({ task_id: id }) //searching by id
        .first(); //first data that matches
    default:
      console.log("no matches");
      break;
  }

  /* ====THIS SHOULD WORK!!!!=====
  const table_id = `${endpoint}_id`.replace("s_", "_");
  return db(endpoint)
    .where({ `${table_id}`: id }) //searching by id
    .first(); //first data that matches
    */
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
  addNew,
  getAll,
  findById,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};
