const db = require("./db-config.js");

const getAll = endpoint => {
  console.log("db-model>getAll", endpoint);
  if (endpoint === "tasks") {
    return db("tasks as t")
      .join("projects as p", "p.project_id", "t.project_id")
      .select(
        "t.task_id",
        "t.task_desc",
        "t.task_note",
        "t.task_completed",
        "p.project_name"
      );
  } else {
    return db(endpoint);
  }
};

const addNew = async (endpoint, newInput) => {
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
      return (
        db("projects")
          .where({ project_id: id }) //searching by id
          .first() //first data that matches
          // .join("tasks", "projects.project_id", "tasks.project_id")
          // .join(
          //   "project_resources as pR",
          //   "pr.project_id",
          //   "projects.project_id"
          // )
          // .join("resources as pR", "pR.project_id", "projects.project_id")
          .select(
            "projects.project_id",
            "projects.project_name",
            "projects.project_desc",
            "projects.project_completed"
          )
      );
    //
    case "tasks":
      console.log("model > tasks");
      return db("tasks")
        .where({ task_id: id }) //searching by id
        .first(); //first data that matches
    default:
      console.log("no matches");
      break;
  }
};

const deleteUnit = (endpoint, id) => {
  console.log("model > deleteUnit:", endpoint, id);

  switch (endpoint) {
    case "resources":
      console.log("model > resources");
      return db("resources")
        .where({ resource_id: id }) //searching by id
        .del();
    case "projects":
      console.log("model > projects");
      return db("projects")
        .where({ project_id: id }) //searching by id
        .del();
    //
    case "tasks":
      console.log("model > tasks");
      return db("tasks")
        .where({ task_id: id }) //searching by id
        .del();
    default:
      console.log("no matches");
      break;
  }
  /*  =====THIS SHOULD WORK!!!!=====
  const whereID = `${endpoint.replace("s", "")}_id`;
  return db(endpoint.replace("/:id", ""))
    .where(`${whereID} : ${id}`)
    .del();
    */
};

module.exports = {
  addNew,
  getAll,
  findById,
  deleteUnit
};
